import { CreateCampaignDto } from './create-campaign.dto';
declare const UpdateCampaignDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateCampaignDto, "totalBudget">>>;
export declare class UpdateCampaignDto extends UpdateCampaignDto_base {
}
export {};
