import { IsIn, IsOptional, IsString } from 'class-validator';

export class ResolveDisputeDto {
  @IsIn(['APPROVED', 'REJECTED'])
  status!: 'APPROVED' | 'REJECTED';

  @IsOptional()
  @IsString()
  resolutionNote?: string;
}
