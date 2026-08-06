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

@Controller('dispute')
@UseGuards(JwtAuthGuards, RolesGuard)
export class DisputeController {
  constructor(private readonly disputeService: DisputeService) {}

  @Post()
  @Roles(Role.CLIPPER)
  create(
    @CurrentUser('sub') clipperId: string,
    @Body() createDisputeDto: CreateDisputeDto,
  ) {
    return this.disputeService.create(clipperId, createDisputeDto);
  }

  @Get('mine')
  @Roles(Role.CLIPPER)
  findMine(
    @CurrentUser('sub') clipperId: string,
    @Query() pagination: PaginationDto,
  ) {
    return this.disputeService.findAllByClipper(clipperId, pagination);
  }

  @Get('pending')
  @Roles(Role.ADMIN)
  findAllPending(@Query() pagination: PaginationDto) {
    return this.disputeService.findAllPending(pagination);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.CLIPPER)
  findOne(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.disputeService.findOne(id, user.sub, user.role);
  }

  @Patch(':id/resolve')
  @Roles(Role.ADMIN)
  resolve(
    @Param('id') id: string,
    @CurrentUser('sub') adminId: string,
    @Body() resolveDisputeDto: ResolveDisputeDto,
  ) {
    return this.disputeService.resolve(id, adminId, resolveDisputeDto);
  }
}
