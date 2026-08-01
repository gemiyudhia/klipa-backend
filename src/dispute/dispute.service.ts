import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClipStatus, DisputeStatus, Role } from 'generated/prisma/enums';
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';

@Injectable()
export class DisputeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(clipperId: string, createDisputeDto: CreateDisputeDto) {
    const clip = await this.prisma.clip.findUnique({
      where: {
        id: createDisputeDto.clipId,
      },
      include: {
        dispute: true,
      },
    });

    if (!clip) {
      throw new NotFoundException('Klip tidak ditemukan');
    }

    // Perbaikan: bandingkan pemilik klip dengan user yang sedang login
    if (clip.clipperId !== clipperId) {
      throw new ForbiddenException(
        'Anda hanya bisa mengajukan dispute untuk klip milik sendiri',
      );
    }

    // Jika dispute hanya boleh dibuat saat klip REJECTED,
    // gunakan !==, bukan ===
    if (clip.status !== ClipStatus.REJECTED) {
      throw new BadRequestException(
        'Dispute hanya bisa diajukan untuk klip yang berstatus REJECTED',
      );
    }

    if (clip.dispute) {
      throw new ConflictException('Klip ini sudah memiliki dispute aktif');
    }

    return this.prisma.dispute.create({
      data: {
        clipId: createDisputeDto.clipId,
        clipperId,
        reason: createDisputeDto.reason,
      },
    });
  }

  async findAllClipper(clipperId: string) {
    return this.prisma.dispute.findMany({
      where: {
        clipperId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        clip: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
      },
    });
  }

  async findAllPending() {
    return this.prisma.dispute.findMany({
      where: {
        status: DisputeStatus.PENDING,
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        clip: {
          include: {
            campaign: {
              select: {
                id: true,
                title: true,
                rewardPerClip: true,
              },
            },
          },
        },
        clipper: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  // Helper internal:
  // mengambil dispute dan melempar NotFoundException jika tidak ditemukan
  // tanpa melakukan pengecekan ownership
  private async findByIdOrThrow(id: string) {
    const dispute = await this.prisma.dispute.findUnique({
      where: {
        id,
      },
      include: {
        clip: {
          include: {
            campaign: true,
          },
        },
        clipper: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!dispute) {
      throw new NotFoundException('Dispute tidak ditemukan');
    }

    return dispute;
  }

  // Dipakai oleh controller:
  // mengambil dispute lalu memeriksa apakah user adalah pemilik atau admin
  async findOne(id: string, userId: string, userRole: Role) {
    const dispute = await this.findByIdOrThrow(id);

    assertOwnerOrAdmin(dispute.clipperId, userId, userRole);

    return dispute;
  }

  async resolve(
    id: string,
    adminId: string,
    resolveDisputeDto: ResolveDisputeDto,
  ) {
    // Admin memakai helper internal tanpa ownership check
    const dispute = await this.findByIdOrThrow(id);

    if (dispute.status !== DisputeStatus.PENDING) {
      throw new BadRequestException(
        'Dispute ini sudah diselesaikan sebelumnya',
      );
    }

    // Jika admin menolak dispute,
    // hanya update data dispute
    if (resolveDisputeDto.status === 'REJECTED') {
      return this.prisma.dispute.update({
        where: {
          id,
        },
        data: {
          status: DisputeStatus.REJECTED,
          resolutionNote: resolveDisputeDto.resolutionNote,
          resolvedById: adminId,
        },
      });
    }

    // Jika dispute disetujui,
    // lakukan seluruh perubahan dalam satu transaction
    const clip = dispute.clip;
    const campaign = clip.campaign;

    const [updatedDispute] = await this.prisma.$transaction([
      // 1. Ubah status dispute menjadi APPROVED
      this.prisma.dispute.update({
        where: {
          id,
        },
        data: {
          status: DisputeStatus.APPROVED,
          resolutionNote: resolveDisputeDto.resolutionNote,
          resolvedById: adminId,
        },
      }),

      // 2. Ubah status klip menjadi APPROVED
      this.prisma.clip.update({
        where: {
          id: clip.id,
        },
        data: {
          status: ClipStatus.APPROVED,
          feedback:
            resolveDisputeDto.resolutionNote ??
            'Disetujui lewat proses dispute',
        },
      }),

      // 3. Kurangi sisa budget campaign
      this.prisma.campaign.update({
        where: {
          id: campaign.id,
        },
        data: {
          remainingBudget: {
            decrement: campaign.rewardPerClip,
          },
        },
      }),

      // 4. Tambahkan saldo clipper
      this.prisma.user.update({
        where: {
          id: clip.clipperId,
        },
        data: {
          balance: {
            increment: campaign.rewardPerClip,
          },
        },
      }),

      // 5. Catat riwayat transaksi
      this.prisma.transaction.create({
        data: {
          userId: clip.clipperId,
          amount: campaign.rewardPerClip,
          type: 'CLIP_PAYOUT_VIA_DISPUTE',
          referenceId: clip.id,
        },
      }),
    ]);

    return updatedDispute;
  }
}
