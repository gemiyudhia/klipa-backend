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
exports.ClipService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const authorization_util_1 = require("../common/utils/authorization.util");
const enums_1 = require("../../generated/prisma/enums");
let ClipService = class ClipService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clipperId, createClipDto) {
        const campaign = await this.prisma.campaign.findUnique({
            where: {
                id: createClipDto.campaignId,
            },
        });
        if (!campaign)
            throw new common_1.NotFoundException('Campaign tidak ditemukan');
        if (campaign.status !== 'ACTIVE') {
            throw new common_1.BadRequestException('Campaign ini tidak sedang aktif menerima klip');
        }
        return this.prisma.clip.create({
            data: {
                title: createClipDto.title,
                videoUrl: createClipDto.videoUrl,
                thumbnailUrl: createClipDto.thumbnailUrl,
                duration: createClipDto.duration,
                campaignId: createClipDto.campaignId,
                clipperId,
            },
        });
    }
    async findAllByClipper(clipperId) {
        return this.prisma.clip.findMany({
            where: {
                clipperId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                campaign: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        });
    }
    async findAllByCampaign(campaignId, userId, userRole) {
        const campaign = await this.prisma.campaign.findUnique({
            where: {
                id: campaignId,
            },
        });
        if (!campaign)
            throw new common_1.NotFoundException('Campaign tidak ditemukan');
        (0, authorization_util_1.assertOwnerOrAdmin)(campaign.creatorId, userId, userRole);
        return this.prisma.clip.findMany({
            where: {
                id: campaignId,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                clipper: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const clip = await this.prisma.clip.findUnique({
            where: {
                id,
            },
            include: {
                campaign: true,
            },
        });
        if (!clip)
            throw new common_1.NotFoundException('Klip tidak ditemukan');
        return clip;
    }
    async update(id, userId, userRole, updateClipDto) {
        const clip = await this.findOne(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(clip.clipperId, userId, userRole);
        if (clip.status === enums_1.ClipStatus.APPROVED && userRole !== enums_1.Role.ADMIN)
            throw new common_1.ForbiddenException('Klip yang sudah disetujui tidak bisa diubah lagi');
        return this.prisma.clip.update({
            where: {
                id,
            },
            data: {
                ...updateClipDto,
                status: clip.status === enums_1.ClipStatus.REVISION_REQUESTED
                    ? enums_1.ClipStatus.PENDING
                    : undefined,
            },
        });
    }
    async remove(id, userId, userRole) {
        const clip = await this.findOne(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(clip.clipperId, userId, userRole);
        if (clip.status === enums_1.ClipStatus.APPROVED && userRole !== enums_1.Role.ADMIN) {
            throw new common_1.ForbiddenException('klip yang sudah disetujui tidak dapat dihapus');
        }
        return this.prisma.clip.delete({ where: { id } });
    }
    async review(id, creatorId, userRole, reviewClipDto) {
        const clip = await this.findOne(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(clip.campaign.creatorId, creatorId, userRole);
        if (clip.status === enums_1.ClipStatus.APPROVED) {
            throw new common_1.BadRequestException('Klip ini sudah disetujui sebelumnya');
        }
        const updateClip = await this.prisma.clip.update({
            where: { id },
            data: {
                status: reviewClipDto.status,
                feedback: reviewClipDto.feedback,
            },
        });
        if (reviewClipDto.status === enums_1.ClipStatus.APPROVED) {
            await this.prisma.$transaction([
                this.prisma.campaign.update({
                    where: {
                        id: clip.campaignId,
                    },
                    data: {
                        remainingBudget: { decrement: clip.campaign.rewardPerClip },
                    },
                }),
                this.prisma.user.update({
                    where: {
                        id: clip.clipperId,
                    },
                    data: {
                        balance: { increment: clip.campaign.rewardPerClip },
                    },
                }),
                this.prisma.transaction.create({
                    data: {
                        userId: clip.clipperId,
                        amount: clip.campaign.rewardPerClip,
                        type: 'CLIP_PAYOUT',
                        referenceId: clip.id,
                    },
                }),
            ]);
        }
        return updateClip;
    }
};
exports.ClipService = ClipService;
exports.ClipService = ClipService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClipService);
//# sourceMappingURL=clip.service.js.map