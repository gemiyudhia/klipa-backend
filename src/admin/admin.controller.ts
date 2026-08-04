import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuards } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CloseCampaignDto } from './dto/close-campaign.dto';
import { SkipThrottle } from '@nestjs/throttler';

@Controller('admin')
@UseGuards(JwtAuthGuards, RolesGuard)
@Roles(Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

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
