import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { WithdrawalService } from './withdrawal.service';
import { CreateWithdrawalDto } from './dto/create-withdrawal.dto';
import { ResolveWithdrawalDto } from './dto/resolve-withdrawal.dto';
import { UpdateBankInfoDto } from './dto/update-bank-info.dto';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Withdrawal')
@ApiBearerAuth('access_token')
@Controller('withdrawal')
@UseGuards(JwtAuthGuards, RolesGuard)
export class WithdrawalController {
  constructor(private readonly withdrawalService: WithdrawalService) {}

  @Patch('bank-info')
  @ApiOperation({ summary: 'Simpan/update info rekening bank' })
  @Roles(Role.CREATOR, Role.CLIPPER)
  updateBankInfo(
    @CurrentUser('sub') userId: string,
    @Body() dto: UpdateBankInfoDto,
  ) {
    return this.withdrawalService.updateBankInfo(userId, dto);
  }

  @Post()
  @ApiOperation({
    summary: 'Ajukan penarikan saldo (butuh info bank terlebih dahulu)',
  })
  @Roles(Role.CREATOR, Role.CLIPPER)
  create(@CurrentUser('sub') userId: string, @Body() dto: CreateWithdrawalDto) {
    return this.withdrawalService.create(userId, dto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Riwayat penarikan saldo milik sendiri' })
  @Roles(Role.CREATOR, Role.CLIPPER)
  findMine(
    @CurrentUser('sub') userId: string,
    @Query() pagination: PaginationDto,
  ) {
    return this.withdrawalService.findAllByUser(userId, pagination);
  }

  @Get('pending')
  @ApiOperation({
    summary: 'Lihat semua permintaan penarikan yang menunggu (Admin)',
  })
  @Roles(Role.ADMIN)
  findAllPending(pagination: PaginationDto) {
    return this.withdrawalService.findAllPending(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detail permintaan penarikan (pemilik atau Admin)' })
  @Roles(Role.CREATOR, Role.CLIPPER, Role.ADMIN)
  findOne(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.withdrawalService.findOne(id, user.sub, user.role);
  }

  @Patch(':id/resolve')
  @ApiOperation({
    summary: 'Setujui/tolak penarikan, pajak dihitung saat approve (Admin)',
  })
  @Roles(Role.ADMIN)
  resolve(
    @Param('id') id: string,
    @CurrentUser('sub') adminId: string,
    @Body() dto: ResolveWithdrawalDto,
  ) {
    return this.withdrawalService.resolve(id, adminId, dto);
  }
}
