import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CampaignStatus, Role } from 'generated/prisma/enums';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async suspendUser(userId: string, suspendUserDto: SuspendUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundException('User tidak ditemukan');

    if (user.role === Role.ADMIN)
      throw new BadRequestException('Tidak bisa suspend akun admin');

    if (user.isSuspended)
      throw new BadRequestException('User ini sudah disuspend sebelumnya');

    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isSuspended: true,
        suspendedReason:
          suspendUserDto.reason ?? 'Melanggar syarat dan ketentuan platform',
        suspendedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        email: true,
        isSuspended: true,
        suspendedReason: true,
        suspendedAt: true,
      },
    });
  }

  async unsuspendUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundException('User tidak ditemukan');

    if (!user.isSuspended)
      throw new BadRequestException('User ini tidak sedang disuspend');

    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isSuspended: false,
        suspendedReason: null,
        suspendedAt: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isSuspended: true,
      },
    });
  }

  async closeCampign(campaignId: string, suspendUserDto: SuspendUserDto) {
    const campaign = await this.prisma.campaign.findUnique({
      where: { id: campaignId },
    });

    if (!campaign) throw new NotFoundException('Campaign tidak ditemukan');

    if (campaign.status === CampaignStatus.BANNED)
      throw new BadRequestException('Campaign ini sudah di-banned sebelumnya');

    if (campaign.status === CampaignStatus.COMPLETED)
      throw new BadRequestException(
        'Campaign ini sudah selesai tidak bisa di-banned',
      );

    return this.prisma.campaign.update({
      where: {
        id: campaignId,
      },
      data: {
        status: CampaignStatus.BANNED,
        bannedReason: suspendUserDto.reason,
        bannedAt: new Date(),
      },
    });
  }

  async getAnalytics() {
    const [
      totalUsers,
      usersByRole,
      totalCampaigns,
      campaignsByStatus,
      totalClips,
      clipsByStatus,
      totalPendingDisputes,
      totalPendingWithdrawals,
      revenueBySource,
      totalTransactionVolume,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.groupBy({
        by: ['role'],
        _count: { role: true },
      }),
      this.prisma.campaign.count(),
      this.prisma.campaign.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
      this.prisma.clip.count(),
      this.prisma.clip.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
      this.prisma.dispute.count({ where: { status: 'PENDING' } }),
      this.prisma.withdrawalRequest.count({ where: { status: 'PENDING' } }),
      this.prisma.platformRevenue.groupBy({
        by: ['source'],
        _sum: { amount: true },
      }),
      this.prisma.transaction.aggregate({
        _sum: { amount: true },
      }),
    ]);

    const totalRevenue = revenueBySource.reduce(
      (sum, item) => sum + (item._sum.amount ?? 0),
      0,
    );

    return {
      users: {
        total: totalUsers,
        byRole: usersByRole.map((item) => ({
          role: item.role,
          count: item._count.role,
        })),
      },
      campaign: {
        total: totalCampaigns,
        byStatus: campaignsByStatus.map((item) => ({
          status: item.status,
          count: item._count.status,
        })),
      },

      clips: {
        total: totalClips,
        byStatus: clipsByStatus.map((item) => ({
          status: item.status,
          count: item._count.status,
        })),
      },
      pendingActions: {
        dispute: totalPendingDisputes,
        withdrawals: totalPendingWithdrawals,
      },
      revenue: {
        total: totalRevenue,
        bySource: revenueBySource.map((item) => ({
          source: item.source,
          amount: item._sum.amount ?? 0,
        })),
      },
      transactionVolume: totalTransactionVolume._sum.amount ?? 0,
    };
  }
}
