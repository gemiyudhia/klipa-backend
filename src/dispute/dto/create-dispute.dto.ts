import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDisputeDto {
  @IsString()
  @IsNotEmpty()
  clipId!: string;

  @IsString()
  @IsNotEmpty()
  reason!: string;
}
