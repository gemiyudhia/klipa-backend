import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DisputeService } from './dispute.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../../generated/prisma/enums';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Dispute')
@ApiBearerAuth('access_token')
@Controller('dispute')
@UseGuards(JwtAuthGuards, RolesGuard)
export class DisputeController {
  constructor(private readonly disputeService: DisputeService) {}

  @Post()
  @ApiOperation({ summary: 'Ajukan dispute untuk klip yang ditolak (Clipper)' })
  @Roles(Role.CLIPPER)
  create(
    @CurrentUser('sub') clipperId: string,
    @Body() createDisputeDto: CreateDisputeDto,
  ) {
    return this.disputeService.create(clipperId, createDisputeDto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Lihat dispute milik sendiri (Clipper)' })
  @Roles(Role.CLIPPER)
  findMine(
    @CurrentUser('sub') clipperId: string,
    @Query() pagination: PaginationDto,
  ) {
    return this.disputeService.findAllByClipper(clipperId, pagination);
  }

  @Get('pending')
  @ApiOperation({
    summary: 'Lihat semua dispute yang menunggu resolusi (Admin)',
  })
  @Roles(Role.ADMIN)
  findAllPending(@Query() pagination: PaginationDto) {
    return this.disputeService.findAllPending(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detail dispute (pemilik atau Admin)' })
  @Roles(Role.ADMIN, Role.CLIPPER)
  findOne(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.disputeService.findOne(id, user.sub, user.role);
  }

  @Patch(':id/resolve')
  @ApiOperation({
    summary: 'Selesaikan dispute: approve (paksa payout) atau reject (Admin)',
  })
  @Roles(Role.ADMIN)
  resolve(
    @Param('id') id: string,
    @CurrentUser('sub') adminId: string,
    @Body() resolveDisputeDto: ResolveDisputeDto,
  ) {
    return this.disputeService.resolve(id, adminId, resolveDisputeDto);
  }
}
