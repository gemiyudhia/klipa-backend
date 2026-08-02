import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './campaign/campaign.module';
import { ClipModule } from './clip/clip.module';
import { DisputeModule } from './dispute/dispute.module';
import { WithdrawalModule } from './withdrawal/withdrawal.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    CampaignModule,
    ClipModule,
    DisputeModule,
    WithdrawalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
