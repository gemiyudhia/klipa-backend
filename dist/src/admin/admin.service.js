"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async suspendUser(userId, suspendUserDto) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User tidak ditemukan');
        if (user.role === enums_1.Role.ADMIN)
            throw new common_1.BadRequestException('Tidak bisa suspend akun admin');
        if (user.isSuspended)
            throw new common_1.BadRequestException('User ini sudah disuspend sebelumnya');
        return this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                isSuspended: true,
                suspendedReason: suspendUserDto.reason ?? 'Melanggar syarat dan ketentuan platform',
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
    async unsuspendUser(userId) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User tidak ditemukan');
        if (!user.isSuspended)
            throw new common_1.BadRequestException('User ini tidak sedang disuspend');
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
    async closeCampign(campaignId, suspendUserDto) {
        const campaign = await this.prisma.campaign.findUnique({
            where: { id: campaignId },
        });
        if (!campaign)
            throw new common_1.NotFoundException('Campaign tidak ditemukan');
        if (campaign.status === enums_1.CampaignStatus.BANNED)
            throw new common_1.BadRequestException('Campaign ini sudah di-banned sebelumnya');
        if (campaign.status === enums_1.CampaignStatus.COMPLETED)
            throw new common_1.BadRequestException('Campaign ini sudah selesai tidak bisa di-banned');
        return this.prisma.campaign.update({
            where: {
                id: campaignId,
            },
            data: {
                status: enums_1.CampaignStatus.BANNED,
                bannedReason: suspendUserDto.reason,
                bannedAt: new Date(),
            },
        });
    }
    async getAnalytics() {
        const [totalUsers, usersByRole, totalCampaigns, campaignsByStatus, totalClips, clipsByStatus, totalPendingDisputes, totalPendingWithdrawals, revenueBySource, totalTransactionVolume,] = await Promise.all([
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
        const totalRevenue = revenueBySource.reduce((sum, item) => sum + (item._sum.amount ?? 0), 0);
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
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map