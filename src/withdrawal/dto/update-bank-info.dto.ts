import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateBankInfoDto {
  @IsString()
  @IsNotEmpty()
  bankName!: string;

  @IsString()
  @IsNotEmpty()
  bankAccountNumber!: string;

  @IsString()
  @IsNotEmpty()
  bankAccountName!: string;
}
