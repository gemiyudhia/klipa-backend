import { Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuards } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../../generated/prisma/enums';
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CloseCampaignDto } from './dto/close-campaign.dto';
import { SkipThrottle } from '@nestjs/throttler';
import { FilterUsersDto } from './dto/filter-users.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('admin')
@UseGuards(JwtAuthGuards, RolesGuard)
@Roles(Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  findAllUsers(
    @Query() query: FilterUsersDto,
  ) {
    return this.adminService.findAllUsers(query);
  }

  @Patch('users/:id/suspend')
  suspendUser(@Param('id') id: string, @Body() suspendUserDto: SuspendUserDto) {
    return this.adminService.suspendUser(id, suspendUserDto);
  }

  @Patch('users/:id/unsuspend')
  unsuspendUser(@Param('id') id: string) {
    return this.adminService.unsuspendUser(id);
  }

  @Patch('campaign/:id/close')
  closeCampaign(
    @Param('id') id: string,
    @Body() closeCampaignDto: CloseCampaignDto,
  ) {
    return this.adminService.closeCampign(id, closeCampaignDto);
  }

  @Get('analytics')
  @SkipThrottle()
  getAnalytics() {
    return this.adminService.getAnalytics();
  }
}
