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
var CampaignExpiryTask_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignExpiryTask = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../prisma/prisma.service");
const enums_1 = require("../../../generated/prisma/enums");
let CampaignExpiryTask = CampaignExpiryTask_1 = class CampaignExpiryTask {
    prisma;
    logger = new common_1.Logger(CampaignExpiryTask_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handleExpiredCampaigns() {
        this.logger.log('Mengecek campaign yang sudah expired...');
        const expiredCampaigns = await this.prisma.campaign.findMany({
            where: {
                deadline: { lt: new Date() },
                status: { in: [enums_1.CampaignStatus.ACTIVE, enums_1.CampaignStatus.PAUSED] },
            },
        });
        for (const campaign of expiredCampaigns) {
            await this.prisma.$transaction(async (tx) => {
                await tx.campaign.update({
                    where: { id: campaign.id },
                    data: { status: enums_1.CampaignStatus.COMPLETED, remainingBudget: 0 },
                });
                if (campaign.remainingBudget > 0) {
                    await tx.user.update({
                        where: { id: campaign.creatorId },
                        data: { balance: { increment: campaign.remainingBudget } },
                    });
                    await tx.transaction.create({
                        data: {
                            userId: campaign.creatorId,
                            amount: campaign.remainingBudget,
                            type: 'CAMPAIGN_REFUND_EXPIRED',
                            referenceId: campaign.id,
                        },
                    });
                }
            });
            this.logger.log(`Campaign ${campaign.id} selesai (expired), refund ${campaign.remainingBudget} ke creator ${campaign.creatorId}`);
        }
        this.logger.log(`Selesai memproses ${expiredCampaigns.length} campaign expired.`);
    }
};
exports.CampaignExpiryTask = CampaignExpiryTask;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignExpiryTask.prototype, "handleExpiredCampaigns", null);
exports.CampaignExpiryTask = CampaignExpiryTask = CampaignExpiryTask_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CampaignExpiryTask);
//# sourceMappingURL=campaign-expiry.task.js.map