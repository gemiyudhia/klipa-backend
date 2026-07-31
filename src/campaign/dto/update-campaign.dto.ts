import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCampaignDto } from './create-campaign.dto';

export class UpdateCampaignDto extends PartialType(
  OmitType(CreateCampaignDto, ['totalBudget'] as const),
) {}
