import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';
import { ClipStatus, DisputeStatus, Role } from 'generated/prisma/enums';

@Injectable()
export class DisputeService {
  constructor(private prisma: PrismaService) {}

  async create(clipperId: string, dto: CreateDisputeDto) {
    const clip = await this.prisma.clip.findUnique({
      where: { id: dto.clipId },
      include: { dispute: true },
    });

    if (!clip) {
      throw new NotFoundException('Klip tidak ditemukan');
    }

    if (clip.clipperId !== clipperId) {
      throw new ForbiddenException(
        'Anda hanya bisa mengajukan dispute untuk klip milik sendiri',
      );
    }

    if (clip.status !== ClipStatus.REJECTED) {
      throw new BadRequestException(
        'Dispute hanya bisa diajukan untuk klip yang berstatus REJECTED',
      );
    }

    if (clip.dispute) {
      throw new ConflictException('Klip ini sudah memiliki dispute aktif');
    }

    return this.prisma.dispute.create({
      data: { clipId: dto.clipId, clipperId, reason: dto.reason },
    });
  }

  async findAllByClipper(clipperId: string) {
    return this.prisma.dispute.findMany({
      where: { clipperId },
      orderBy: { createdAt: 'desc' },
      include: { clip: { select: { id: true, title: true, status: true } } },
    });
  }

  async findAllPending() {
    return this.prisma.dispute.findMany({
      where: { status: DisputeStatus.PENDING },
      orderBy: { createdAt: 'asc' },
      include: {
        clip: {
          include: {
            campaign: {
              select: { id: true, title: true, rewardPerClip: true },
            },
          },
        },
        clipper: { select: { id: true, name: true, email: true } },
      },
    });
  }

  private async findByIdOrThrow(id: string) {
    const dispute = await this.prisma.dispute.findUnique({
      where: { id },
      include: {
        clip: { include: { campaign: true } },
        clipper: { select: { id: true, name: true, email: true } },
      },
    });

    if (!dispute) {
      throw new NotFoundException('Dispute tidak ditemukan');
    }

    return dispute;
  }

  async findOne(id: string, userId: string, userRole: Role) {
    const dispute = await this.findByIdOrThrow(id);
    assertOwnerOrAdmin(dispute.clipperId, userId, userRole);
    return dispute;
  }

  async resolve(id: string, adminId: string, dto: ResolveDisputeDto) {
    const dispute = await this.findByIdOrThrow(id);

    if (dispute.status !== DisputeStatus.PENDING) {
      throw new BadRequestException(
        'Dispute ini sudah diselesaikan sebelumnya',
      );
    }

    if (dto.status === 'REJECTED') {
      return this.prisma.dispute.update({
        where: { id },
        data: {
          status: DisputeStatus.REJECTED,
          resolutionNote: dto.resolutionNote,
          resolvedById: adminId,
        },
      });
    }

    const clip = dispute.clip;
    const campaign = clip.campaign;
    const rewardPerClip = campaign.rewardPerClip;
    const platformFeeAmount = rewardPerClip * 0.1;
    const payoutAmount = rewardPerClip - platformFeeAmount;

    return this.prisma.$transaction(async (tx) => {
      const lockResult = await tx.campaign.updateMany({
        where: { id: campaign.id, remainingBudget: { gte: rewardPerClip } },
        data: { remainingBudget: { decrement: rewardPerClip } },
      });

      if (lockResult.count === 0) {
        throw new BadRequestException(
          'Budget campaign sudah habis, dispute tidak bisa disetujui saat ini',
        );
      }

      const updatedDispute = await tx.dispute.update({
        where: { id },
        data: {
          status: DisputeStatus.APPROVED,
          resolutionNote: dto.resolutionNote,
          resolvedById: adminId,
        },
      });

      await tx.clip.update({
        where: { id: clip.id },
        data: {
          status: ClipStatus.APPROVED,
          feedback: dto.resolutionNote ?? 'Disetujui lewat proses dispute',
          platformFeeAmount,
          payoutAmount,
        },
      });

      await tx.user.update({
        where: { id: clip.clipperId },
        data: { balance: { increment: payoutAmount } },
      });

      await tx.transaction.create({
        data: {
          userId: clip.clipperId,
          amount: payoutAmount,
          type: 'CLIP_PAYOUT_VIA_DISPUTE',
          referenceId: clip.id,
        },
      });

      await tx.platformRevenue.create({
        data: {
          source: 'CLIPPER_FEE',
          amount: platformFeeAmount,
          referenceId: clip.id,
        },
      });

      return updatedDispute;
    });
  }
}
