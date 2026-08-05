import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { ReviewClipDto } from './dto/review-clip.dto';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';
import { Role, ClipStatus } from 'generated/prisma/enums';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { buildPaginationMeta, getSkip } from 'src/common/utils/pagination.util';

@Injectable()
export class ClipService {
  constructor(private prisma: PrismaService) {}

  async create(clipperId: string, dto: CreateClipDto) {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id: dto.campaignId },
    });

    if (!campaign) {
      throw new NotFoundException('Campaign tidak ditemukan');
    }

    if (campaign.status !== 'ACTIVE') {
      throw new BadRequestException(
        'Campaign ini tidak sedang aktif menerima klip',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const lockResult = await tx.campaign.updateMany({
        where: {
          id: dto.campaignId,
          remainingBudget: { gte: campaign.rewardPerClip },
        },
        data: {
          remainingBudget: { decrement: campaign.rewardPerClip },
        },
      });

      if (lockResult.count === 0) {
        throw new BadRequestException('Budget campaign ini sudah penuh/habis');
      }

      return tx.clip.create({
        data: {
          title: dto.title,
          videoUrl: dto.videoUrl,
          thumbnailUrl: dto.thumbnailUrl,
          duration: dto.duration,
          campaignId: dto.campaignId,
          clipperId,
        },
      });
    });
  }

  async findAllByClipper(clipperId: string, pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.clip.findMany({
        where: { clipperId },
        orderBy: { createdAt: 'desc' },
        include: { campaign: { select: { id: true, title: true } } },
        skip,
        take: limit,
      }),
      this.prisma.clip.count({ where: { clipperId } }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async findAllByCampaign(
    campaignId: string,
    userId: string,
    userRole: Role,
    pagination: PaginationDto,
  ) {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id: campaignId },
    });

    if (!campaign) {
      throw new NotFoundException('Campaign tidak ditemukan');
    }

    assertOwnerOrAdmin(campaign.creatorId, userId, userRole);

    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.clip.findMany({
        where: { campaignId },
        orderBy: {createdAt: 'desc'},
        include: {clipper: {select: {id: true, name: true}}},
        skip,
        take: limit
      }),

      this.prisma.clip.count({where: {campaignId}})
    ]);

    return {data, meta: buildPaginationMeta(total, page, limit)}
  }

  async findOne(id: string) {
    const clip = await this.prisma.clip.findUnique({
      where: { id },
      include: { campaign: true },
    });

    if (!clip) {
      throw new NotFoundException('Klip tidak ditemukan');
    }

    return clip;
  }

  async update(id: string, userId: string, userRole: Role, dto: UpdateClipDto) {
    const clip = await this.findOne(id);
    assertOwnerOrAdmin(clip.clipperId, userId, userRole);

    if (clip.status === ClipStatus.APPROVED && userRole !== Role.ADMIN) {
      throw new ForbiddenException(
        'Klip yang sudah disetujui tidak bisa diubah lagi',
      );
    }

    return this.prisma.clip.update({
      where: { id },
      data: {
        ...dto,
        status:
          clip.status === ClipStatus.REVISION_REQUESTED
            ? ClipStatus.PENDING
            : undefined,
      },
    });
  }

  async remove(id: string, userId: string, userRole: Role) {
    const clip = await this.findOne(id);
    assertOwnerOrAdmin(clip.clipperId, userId, userRole);

    if (clip.status === ClipStatus.APPROVED && userRole !== Role.ADMIN) {
      throw new ForbiddenException(
        'Klip yang sudah disetujui tidak bisa dihapus',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const deletedClip = await tx.clip.delete({ where: { id } });

      if (clip.status !== ClipStatus.APPROVED) {
        await tx.campaign.update({
          where: { id: clip.campaignId },
          data: { remainingBudget: { increment: clip.campaign.rewardPerClip } },
        });
      }

      return deletedClip;
    });
  }

  async review(
    id: string,
    creatorId: string,
    userRole: Role,
    dto: ReviewClipDto,
  ) {
    const clip = await this.findOne(id);
    assertOwnerOrAdmin(clip.campaign.creatorId, creatorId, userRole);

    if (clip.status === ClipStatus.APPROVED) {
      throw new BadRequestException('Klip ini sudah disetujui sebelumnya');
    }

    if (dto.status === 'REJECTED') {
      return this.prisma.$transaction(async (tx) => {
        const updatedClip = await tx.clip.update({
          where: { id },
          data: { status: ClipStatus.REJECTED, feedback: dto.feedback },
        });

        await tx.campaign.update({
          where: { id: clip.campaignId },
          data: { remainingBudget: { increment: clip.campaign.rewardPerClip } },
        });

        return updatedClip;
      });
    }

    if (dto.status === 'REVISION_REQUESTED') {
      return this.prisma.clip.update({
        where: { id },
        data: { status: ClipStatus.REVISION_REQUESTED, feedback: dto.feedback },
      });
    }

    // APPROVED
    const rewardPerClip = clip.campaign.rewardPerClip;
    const platformFeeAmount = rewardPerClip * 0.1;
    const payoutAmount = rewardPerClip - platformFeeAmount;

    const [updatedClip] = await this.prisma.$transaction([
      this.prisma.clip.update({
        where: { id },
        data: {
          status: ClipStatus.APPROVED,
          feedback: dto.feedback,
          platformFeeAmount,
          payoutAmount,
        },
      }),
      this.prisma.user.update({
        where: { id: clip.clipperId },
        data: { balance: { increment: payoutAmount } },
      }),
      this.prisma.transaction.create({
        data: {
          userId: clip.clipperId,
          amount: payoutAmount,
          type: 'CLIP_PAYOUT',
          referenceId: clip.id,
        },
      }),
      this.prisma.platformRevenue.create({
        data: {
          source: 'CLIPPER_FEE',
          amount: platformFeeAmount,
          referenceId: clip.id,
        },
      }),
    ]);

    return updatedClip;
  }
}
