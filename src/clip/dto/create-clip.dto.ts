import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateClipDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsUrl()
  videoUrl!: string;

  @IsOptional()
  @IsUrl()
  thumbnailUrl?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @IsString()
  @IsNotEmpty()
  campaignId!: string;
}
