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
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
const authorization_util_1 = require("../common/utils/authorization.util");
let CampaignService = class CampaignService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(creatorId, createCampaignDto) {
        return this.prisma.campaign.create({
            data: {
                title: createCampaignDto.title,
                description: createCampaignDto.description,
                rewardPerClip: createCampaignDto.rewardPerClip,
                totalBudget: createCampaignDto.totalBudget,
                remainingBudget: createCampaignDto.totalBudget,
                vodUrl: createCampaignDto.vodUrl,
                deadline: new Date(createCampaignDto.deadline),
                creatorId,
            },
        });
    }
    async findAllByCreator(creatorId) {
        return this.prisma.campaign.findMany({
            where: { creatorId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findAllPublic() {
        return this.prisma.campaign.findMany({
            where: { status: enums_1.CampaignStatus.ACTIVE },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const campaign = await this.prisma.campaign.findUnique({ where: { id } });
        if (!campaign)
            throw new common_1.NotFoundException('Campaign tidak ditemukan');
        return campaign;
    }
    async update(id, userId, userRole, updateCampaignDto) {
        const campaign = await this.findOne(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(campaign.creatorId, userId, userRole);
        return this.prisma.campaign.update({
            where: { id },
            data: {
                ...updateCampaignDto,
                deadline: updateCampaignDto.deadline
                    ? new Date(updateCampaignDto.deadline)
                    : undefined,
            },
        });
    }
    async remove(id, userId, userRole) {
        const campaign = await this.findOne(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(campaign.creatorId, userId, userRole);
        return this.prisma.campaign.delete({ where: { id } });
    }
};
exports.CampaignService = CampaignService;
exports.CampaignService = CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CampaignService);
//# sourceMappingURL=campaign.service.js.map