import { IsOptional, IsIn, IsString } from 'class-validator';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class FilterUsersDto extends PaginationDto {
  @IsOptional()
  @IsIn(['CREATOR', 'CLIPPER', 'ADMIN'])
  role?: 'CREATOR' | 'CLIPPER' | 'ADMIN';

  @IsOptional()
  @IsString()
  search?: string;
}
