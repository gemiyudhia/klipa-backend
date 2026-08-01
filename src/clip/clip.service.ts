import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';
import { ClipStatus, Role } from 'generated/prisma/enums';
import { ReviewClipDto } from './dto/review-clip.dto';

@Injectable()
export class ClipService {
  constructor(private readonly prisma: PrismaService) {}

  async create(clipperId: string, createClipDto: CreateClipDto) {
    const campaign = await this.prisma.campaign.findUnique({
      where: {
        id: createClipDto.campaignId,
      },
    });

    if (!campaign) throw new NotFoundException('Campaign tidak ditemukan');

    if (campaign.status !== 'ACTIVE') {
      throw new BadRequestException(
        'Campaign ini tidak sedang aktif menerima klip',
      );
    }

    return this.prisma.clip.create({
      data: {
        title: createClipDto.title,
        videoUrl: createClipDto.videoUrl,
        thumbnailUrl: createClipDto.thumbnailUrl,
        duration: createClipDto.duration,
        campaignId: createClipDto.campaignId,
        clipperId,
      },
    });
  }

  async findAllByClipper(clipperId: string) {
    return this.prisma.clip.findMany({
      where: {
        clipperId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        campaign: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });
  }

  async findAllByCampaign(campaignId: string, userId: string, userRole: Role) {
    const campaign = await this.prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });

    if (!campaign) throw new NotFoundException('Campaign tidak ditemukan');

    assertOwnerOrAdmin(campaign.creatorId, userId, userRole);

    return this.prisma.clip.findMany({
      where: {
        id: campaignId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        clipper: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const clip = await this.prisma.clip.findUnique({
      where: {
        id,
      },
      include: {
        campaign: true,
      },
    });

    if (!clip) throw new NotFoundException('Klip tidak ditemukan');

    return clip;
  }

  async update(
    id: string,
    userId: string,
    userRole: Role,
    updateClipDto: UpdateClipDto,
  ) {
    const clip = await this.findOne(id);

    assertOwnerOrAdmin(clip.clipperId, userId, userRole);

    if (clip.status === ClipStatus.APPROVED && userRole !== Role.ADMIN)
      throw new ForbiddenException(
        'Klip yang sudah disetujui tidak bisa diubah lagi',
      );

    return this.prisma.clip.update({
      where: {
        id,
      },
      data: {
        ...updateClipDto,
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
        'klip yang sudah disetujui tidak dapat dihapus',
      );
    }

    return this.prisma.clip.delete({ where: { id } });
  }

  async review(
    id: string,
    creatorId: string,
    userRole: Role,
    reviewClipDto: ReviewClipDto,
  ) {
    const clip = await this.findOne(id);

    assertOwnerOrAdmin(clip.campaign.creatorId, creatorId, userRole);

    if (clip.status === ClipStatus.APPROVED) {
      throw new BadRequestException('Klip ini sudah disetujui sebelumnya');
    }

    const updateClip = await this.prisma.clip.update({
      where: { id },
      data: {
        status: reviewClipDto.status,
        feedback: reviewClipDto.feedback,
      },
    });

    if (reviewClipDto.status === ClipStatus.APPROVED) {
      await this.prisma.$transaction([
        this.prisma.campaign.update({
          where: {
            id: clip.campaignId,
          },
          data: {
            remainingBudget: { decrement: clip.campaign.rewardPerClip },
          },
        }),
        this.prisma.user.update({
          where: {
            id: clip.clipperId,
          },
          data: {
            balance: { increment: clip.campaign.rewardPerClip },
          },
        }),
        this.prisma.transaction.create({
          data: {
            userId: clip.clipperId,
            amount: clip.campaign.rewardPerClip,
            type: 'CLIP_PAYOUT',
            referenceId: clip.id,
          },
        }),
      ]);
    }

    return updateClip;
  }
}
