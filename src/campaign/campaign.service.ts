import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CampaignStatus, Role } from 'generated/prisma/enums';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { buildPaginationMeta, getSkip } from 'src/common/utils/pagination.util';

@Injectable()
export class CampaignService {
  constructor(private readonly prisma: PrismaService) {}

  async create(creatorId: string, dto: CreateCampaignDto) {
    const creator = await this.prisma.user.findUnique({
      where: { id: creatorId },
    });

    if (!creator) {
      throw new NotFoundException('User tidak ditemukan');
    }

    const platformFeeAmount = dto.totalBudget * 0.05;
    const totalCharged = dto.totalBudget + platformFeeAmount;

    if (creator.balance < totalCharged) {
      throw new BadRequestException(
        `Saldo tidak mencukupi. Dibutuhkan ${totalCharged} (sudah termasuk fee platform 5%), saldo Anda saat ini ${creator.balance}`,
      );
    }

    const campaign = await this.prisma.$transaction(async (tx) => {
      const newCampaign = await tx.campaign.create({
        data: {
          title: dto.title,
          description: dto.description,
          rewardPerClip: dto.rewardPerClip,
          totalBudget: dto.totalBudget,
          remainingBudget: dto.totalBudget,
          platformFeeAmount,
          totalCharged,
          vodUrl: dto.vodUrl,
          deadline: new Date(dto.deadline),
          creatorId,
        },
      });

      await tx.user.update({
        where: { id: creatorId },
        data: { balance: { decrement: totalCharged } },
      });

      await tx.transaction.create({
        data: {
          userId: creatorId,
          amount: -dto.totalBudget,
          type: 'CAMPAIGN_DEPOSIT',
          referenceId: newCampaign.id,
        },
      });

      await tx.transaction.create({
        data: {
          userId: creatorId,
          amount: -platformFeeAmount,
          type: 'CREATOR_PLATFORM_FEE',
          referenceId: newCampaign.id,
        },
      });

      await tx.platformRevenue.create({
        data: {
          source: 'CREATOR_FEE',
          amount: platformFeeAmount,
          referenceId: newCampaign.id,
        },
      });

      return newCampaign;
    });

    return campaign;
  }

  async findAllByCreator(creatorId: string, pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.campaign.findMany({
        where: { creatorId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.campaign.count({ where: { creatorId } }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async findAllPublic(pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.campaign.findMany({
        where: { status: CampaignStatus.ACTIVE },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.campaign.count({ where: { status: CampaignStatus.ACTIVE } }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async findOne(id: string) {
    const campaign = await this.prisma.campaign.findUnique({ where: { id } });

    if (!campaign) throw new NotFoundException('Campaign tidak ditemukan');

    return campaign;
  }

  async update(
    id: string,
    userId: string,
    userRole: Role,
    updateCampaignDto: UpdateCampaignDto,
  ) {
    const campaign = await this.findOne(id);
    assertOwnerOrAdmin(campaign.creatorId, userId, userRole);

    return this.prisma.campaign.update({
      where: { id },
      data: {
        ...updateCampaignDto,
        deadline: updateCampaignDto.deadline
          ? new Date(updateCampaignDto.deadline)
          : undefined,
      },
    });
  }

  async remove(id: string, userId: string, userRole: Role) {
    const campaign = await this.findOne(id);

    assertOwnerOrAdmin(campaign.creatorId, userId, userRole);

    return this.prisma.campaign.delete({ where: { id } });
  }
}
