import { IsIn } from 'class-validator';

export class SelectRoleDto {
  @IsIn(['CREATOR', 'CLIPPER'])
  role!: 'CREATOR' | 'CLIPPER';
}
