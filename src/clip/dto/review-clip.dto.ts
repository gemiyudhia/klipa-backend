import { IsIn, IsOptional, IsString } from 'class-validator';

export class ReviewClipDto {
  @IsIn(['APPROVED', 'REJECTED', 'REVISION_REQUESTED'])
  status!: 'APPROVED' | 'REJECTED' | 'REVISION_REQUESTED';

  @IsOptional()
  @IsString()
  feedback?: string;
}
