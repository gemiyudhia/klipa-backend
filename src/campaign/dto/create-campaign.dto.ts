import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @Min(0)
  rewardPerClip!: number;

  @IsNumber()
  @Min(0)
  totalBudget!: number;

  @IsOptional()
  @IsUrl()
  vodUrl!: string;

  @IsDateString()
  deadline!: string;
}
