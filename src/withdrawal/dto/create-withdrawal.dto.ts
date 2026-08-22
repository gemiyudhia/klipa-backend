import { IsNumber, Min } from 'class-validator';

export class CreateWithdrawalDto {
  @IsNumber()
  @Min(50000)
  amount!: number;
}
