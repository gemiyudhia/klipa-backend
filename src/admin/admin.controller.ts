import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../../generated/prisma/enums';
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CloseCampaignDto } from './dto/close-campaign.dto';
import { SkipThrottle } from '@nestjs/throttler';
import { FilterUsersDto } from './dto/filter-users.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@ApiBearerAuth('access_token')
@Controller('admin')
@UseGuards(JwtAuthGuards, RolesGuard)
@Roles(Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  @ApiOperation({ summary: 'Daftar semua user, dengan filter role dan search' })
  findAllUsers(@Query() query: FilterUsersDto) {
    return this.adminService.findAllUsers(query);
  }

  @Patch('users/:id/suspend')
  @ApiOperation({ summary: 'Suspend user (memblokir login)' })
  suspendUser(@Param('id') id: string, @Body() suspendUserDto: SuspendUserDto) {
    return this.adminService.suspendUser(id, suspendUserDto);
  }

  @Patch('users/:id/unsuspend')
  @ApiOperation({ summary: 'Batalkan suspend user' })
  unsuspendUser(@Param('id') id: string) {
    return this.adminService.unsuspendUser(id);
  }

  @Patch('campaign/:id/close')
  @ApiOperation({
    summary: 'Tutup paksa campaign (dana tidak di-refund otomatis)',
  })
  closeCampaign(
    @Param('id') id: string,
    @Body() closeCampaignDto: CloseCampaignDto,
  ) {
    return this.adminService.closeCampign(id, closeCampaignDto);
  }

  @Get('analytics')
  @ApiOperation({
    summary: 'Statistik global platform: user, campaign, klip, revenue',
  })
  @SkipThrottle()
  getAnalytics() {
    return this.adminService.getAnalytics();
  }
}
