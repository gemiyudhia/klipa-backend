import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma/prisma.service';
import { CampaignStatus } from 'generated/prisma/enums';

@Injectable()
export class CampaignExpiryTask {
  private readonly logger = new Logger(CampaignExpiryTask.name);

  constructor(private prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleExpiredCampaigns() {
    this.logger.log('Mengecek campaign yang sudah expired...');

    const expiredCampaigns = await this.prisma.campaign.findMany({
      where: {
        deadline: { lt: new Date() },
        status: { in: [CampaignStatus.ACTIVE, CampaignStatus.PAUSED] },
      },
    });

    for (const campaign of expiredCampaigns) {
      await this.prisma.$transaction(async (tx) => {
        await tx.campaign.update({
          where: { id: campaign.id },
          data: { status: CampaignStatus.COMPLETED, remainingBudget: 0 },
        });

        if (campaign.remainingBudget > 0) {
          await tx.user.update({
            where: { id: campaign.creatorId },
            data: { balance: { increment: campaign.remainingBudget } },
          });

          await tx.transaction.create({
            data: {
              userId: campaign.creatorId,
              amount: campaign.remainingBudget,
              type: 'CAMPAIGN_REFUND_EXPIRED',
              referenceId: campaign.id,
            },
          });
        }
      });

      this.logger.log(
        `Campaign ${campaign.id} selesai (expired), refund ${campaign.remainingBudget} ke creator ${campaign.creatorId}`,
      );
    }

    this.logger.log(
      `Selesai memproses ${expiredCampaigns.length} campaign expired.`,
    );
  }
}
