import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CampaignStatus, Role } from 'generated/prisma/enums';
import { assertOwnerOrAdmin } from 'src/common/utils/authorization.util';

@Injectable()
export class CampaignService {
  constructor(private readonly prisma: PrismaService) {}

  async create(creatorId: string, createCampaignDto: CreateCampaignDto) {
    return this.prisma.campaign.create({
      data: {
        title: createCampaignDto.title,
        description: createCampaignDto.description,
        rewardPerClip: createCampaignDto.rewardPerClip,
        totalBudget: createCampaignDto.totalBudget,
        remainingBudget: createCampaignDto.totalBudget,
        vodUrl: createCampaignDto.vodUrl,
        deadline: new Date(createCampaignDto.deadline),
        creatorId,
      },
    });
  }

  async findAllByCreator(creatorId: string) {
    return this.prisma.campaign.findMany({
      where: { creatorId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllPublic() {
    return this.prisma.campaign.findMany({
      where: { status: CampaignStatus.ACTIVE },
      orderBy: { createdAt: 'desc' },
    });
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
