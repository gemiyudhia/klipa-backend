import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ClipService } from './clip.service';
import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { ReviewClipDto } from './dto/review-clip.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Role } from '../../generated/prisma/enums';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Clip')
@ApiBearerAuth('access_token')
@Controller('clip')
@UseGuards(JwtAuthGuards, RolesGuard)
export class ClipController {
  constructor(private readonly clipService: ClipService) {}

  @Post()
  @ApiOperation({
    summary: 'Submit klip ke campaign (Clipper, budget langsung terkunci)',
  })
  @Roles(Role.CLIPPER)
  create(
    @CurrentUser('sub') clipperId: string,
    @Body() createClipDto: CreateClipDto,
  ) {
    return this.clipService.create(clipperId, createClipDto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Lihat semua klip milik sendiri (Clipper)' })
  @Roles(Role.CLIPPER)
  findMine(
    @CurrentUser('sub') clipperId: string,
    @Query() pagination: PaginationDto,
  ) {
    return this.clipService.findAllByClipper(clipperId, pagination);
  }

  @Get('by-campaign/:campaignId')
  @ApiOperation({
    summary: 'Lihat semua klip masuk ke campaign (pemilik campaign atau Admin)',
  })
  @Roles(Role.ADMIN, Role.CREATOR)
  findByCampaign(
    @Param('campaignId') campaignId: string,
    @CurrentUser() user: { sub: string; role: Role },
    @Query() pagination: PaginationDto,
  ) {
    return this.clipService.findAllByCampaign(
      campaignId,
      user.sub,
      user.role,
      pagination,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detail satu klip' })
  @Roles(Role.ADMIN, Role.CLIPPER, Role.CREATOR)
  findOne(@Param('id') id: string) {
    return this.clipService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit klip (hanya bisa sebelum APPROVED)' })
  @Roles(Role.ADMIN, Role.CLIPPER)
  update(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
    @Body() updateClipDto: UpdateClipDto,
  ) {
    return this.clipService.update(id, user.sub, user.role, updateClipDto);
  }

  @Patch(':id/review')
  @ApiOperation({
    summary:
      'Review klip: approve/reject/request revision (pemilik campaign atau Admin)',
  })
  @Roles(Role.CREATOR, Role.ADMIN)
  review(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
    @Body() reviewClipDto: ReviewClipDto,
  ) {
    return this.clipService.review(id, user.sub, user.role, reviewClipDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Hapus klip (hanya bisa sebelum APPROVED)' })
  @Roles(Role.CLIPPER, Role.ADMIN)
  remove(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.clipService.remove(id, user.sub, user.role);
  }
}
