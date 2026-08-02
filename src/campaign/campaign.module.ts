import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CampaignExpiryTask } from './task/campaign-expiry.task';

@Module({
  imports: [PrismaModule],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignExpiryTask],
  exports: [CampaignService, CampaignExpiryTask],
})
export class CampaignModule {}
