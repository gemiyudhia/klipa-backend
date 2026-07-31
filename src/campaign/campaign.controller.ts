import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'generated/prisma/enums';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtAuthGuards } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('campaign')
@UseGuards(JwtAuthGuards, RolesGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  @Roles(Role.CREATOR)
  create(
    @CurrentUser('sub') creatorId: string,
    @Body() createCampaignDto: CreateCampaignDto,
  ) {
    return this.campaignService.create(creatorId, createCampaignDto);
  }

  @Get('mine')
  @Roles(Role.CREATOR)
  findMine(@CurrentUser('sub') creatorId: string) {
    return this.campaignService.findAllByCreator(creatorId);
  }

  @Get()
  @Roles(Role.CREATOR, Role.CLIPPER, Role.ADMIN)
  findAllPublic() {
    return this.campaignService.findAllPublic();
  }

  @Get(':id')
  @Roles(Role.CREATOR, Role.ADMIN, Role.CLIPPER)
  findOne(@Param('id') id: string) {
    return this.campaignService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.CREATOR, Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.campaignService.update(
      id,
      user.sub,
      user.role,
      updateCampaignDto,
    );
  }

  @Delete(':id')
  @Roles(Role.CREATOR, Role.ADMIN)
  remove(
    @Param('id') id: string,
    @CurrentUser() user: { sub: string; role: Role },
  ) {
    return this.campaignService.remove(id, user.sub, user.role);
  }
}
