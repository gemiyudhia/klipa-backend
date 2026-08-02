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
exports.DisputeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const authorization_util_1 = require("../common/utils/authorization.util");
const enums_1 = require("../../generated/prisma/enums");
let DisputeService = class DisputeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clipperId, dto) {
        const clip = await this.prisma.clip.findUnique({
            where: { id: dto.clipId },
            include: { dispute: true },
        });
        if (!clip) {
            throw new common_1.NotFoundException('Klip tidak ditemukan');
        }
        if (clip.clipperId !== clipperId) {
            throw new common_1.ForbiddenException('Anda hanya bisa mengajukan dispute untuk klip milik sendiri');
        }
        if (clip.status !== enums_1.ClipStatus.REJECTED) {
            throw new common_1.BadRequestException('Dispute hanya bisa diajukan untuk klip yang berstatus REJECTED');
        }
        if (clip.dispute) {
            throw new common_1.ConflictException('Klip ini sudah memiliki dispute aktif');
        }
        return this.prisma.dispute.create({
            data: { clipId: dto.clipId, clipperId, reason: dto.reason },
        });
    }
    async findAllByClipper(clipperId) {
        return this.prisma.dispute.findMany({
            where: { clipperId },
            orderBy: { createdAt: 'desc' },
            include: { clip: { select: { id: true, title: true, status: true } } },
        });
    }
    async findAllPending() {
        return this.prisma.dispute.findMany({
            where: { status: enums_1.DisputeStatus.PENDING },
            orderBy: { createdAt: 'asc' },
            include: {
                clip: {
                    include: {
                        campaign: {
                            select: { id: true, title: true, rewardPerClip: true },
                        },
                    },
                },
                clipper: { select: { id: true, name: true, email: true } },
            },
        });
    }
    async findByIdOrThrow(id) {
        const dispute = await this.prisma.dispute.findUnique({
            where: { id },
            include: {
                clip: { include: { campaign: true } },
                clipper: { select: { id: true, name: true, email: true } },
            },
        });
        if (!dispute) {
            throw new common_1.NotFoundException('Dispute tidak ditemukan');
        }
        return dispute;
    }
    async findOne(id, userId, userRole) {
        const dispute = await this.findByIdOrThrow(id);
        (0, authorization_util_1.assertOwnerOrAdmin)(dispute.clipperId, userId, userRole);
        return dispute;
    }
    async resolve(id, adminId, dto) {
        const dispute = await this.findByIdOrThrow(id);
        if (dispute.status !== enums_1.DisputeStatus.PENDING) {
            throw new common_1.BadRequestException('Dispute ini sudah diselesaikan sebelumnya');
        }
        if (dto.status === 'REJECTED') {
            return this.prisma.dispute.update({
                where: { id },
                data: {
                    status: enums_1.DisputeStatus.REJECTED,
                    resolutionNote: dto.resolutionNote,
                    resolvedById: adminId,
                },
            });
        }
        const clip = dispute.clip;
        const campaign = clip.campaign;
        const rewardPerClip = campaign.rewardPerClip;
        const platformFeeAmount = rewardPerClip * 0.1;
        const payoutAmount = rewardPerClip - platformFeeAmount;
        return this.prisma.$transaction(async (tx) => {
            const lockResult = await tx.campaign.updateMany({
                where: { id: campaign.id, remainingBudget: { gte: rewardPerClip } },
                data: { remainingBudget: { decrement: rewardPerClip } },
            });
            if (lockResult.count === 0) {
                throw new common_1.BadRequestException('Budget campaign sudah habis, dispute tidak bisa disetujui saat ini');
            }
            const updatedDispute = await tx.dispute.update({
                where: { id },
                data: {
                    status: enums_1.DisputeStatus.APPROVED,
                    resolutionNote: dto.resolutionNote,
                    resolvedById: adminId,
                },
            });
            await tx.clip.update({
                where: { id: clip.id },
                data: {
                    status: enums_1.ClipStatus.APPROVED,
                    feedback: dto.resolutionNote ?? 'Disetujui lewat proses dispute',
                    platformFeeAmount,
                    payoutAmount,
                },
            });
            await tx.user.update({
                where: { id: clip.clipperId },
                data: { balance: { increment: payoutAmount } },
            });
            await tx.transaction.create({
                data: {
                    userId: clip.clipperId,
                    amount: payoutAmount,
                    type: 'CLIP_PAYOUT_VIA_DISPUTE',
                    referenceId: clip.id,
                },
            });
            await tx.platformRevenue.create({
                data: {
                    source: 'CLIPPER_FEE',
                    amount: platformFeeAmount,
                    referenceId: clip.id,
                },
            });
            return updatedDispute;
        });
    }
};
exports.DisputeService = DisputeService;
exports.DisputeService = DisputeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisputeService);
//# sourceMappingURL=dispute.service.js.map