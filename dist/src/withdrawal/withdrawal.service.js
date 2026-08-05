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
exports.WithdrawalService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
const pagination_util_1 = require("../common/utils/pagination.util");
let WithdrawalService = class WithdrawalService {
    prisma;
    configService;
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
    }
    async updateBankInfo(userId, dto) {
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                bankName: dto.bankName,
                bankAccountNumber: dto.bankAccountNumber,
                bankAccountName: dto.bankAccountName,
            },
            select: {
                id: true,
                bankName: true,
                bankAccountNumber: true,
                bankAccountName: true,
            },
        });
    }
    async create(userId, dto) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User tidak ditemukan');
        }
        if (!user.bankName || !user.bankAccountNumber || !user.bankAccountName) {
            throw new common_1.BadRequestException('Lengkapi data rekening bank terlebih dahulu sebelum melakukan penarikan');
        }
        if (dto.amount > user.balance) {
            throw new common_1.BadRequestException('Saldo tidak mencukupi');
        }
        return this.prisma.withdrawalRequest.create({
            data: {
                userId,
                amount: dto.amount,
            },
        });
    }
    async findAllByUser(userId, pagination) {
        const { page = 1, limit = 10 } = pagination;
        const skip = (0, pagination_util_1.getSkip)(page, limit);
        const [data, total] = await this.prisma.$transaction([
            this.prisma.withdrawalRequest.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.withdrawalRequest.count({ where: { userId } }),
        ]);
        return { data, meta: (0, pagination_util_1.buildPaginationMeta)(total, page, limit) };
    }
    async findAllPending(pagination) {
        const { page = 1, limit = 10 } = pagination;
        const skip = (0, pagination_util_1.getSkip)(page, limit);
        const [data, total] = await this.prisma.$transaction([
            this.prisma.withdrawalRequest.findMany({
                where: { status: enums_1.WithdrawalStatus.PENDING },
                orderBy: { createdAt: 'asc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            bankName: true,
                            bankAccountNumber: true,
                            bankAccountName: true,
                        },
                    },
                },
                skip,
                take: limit,
            }),
            this.prisma.withdrawalRequest.count({
                where: { status: enums_1.WithdrawalStatus.PENDING },
            }),
        ]);
        return { data, meta: (0, pagination_util_1.buildPaginationMeta)(total, page, limit) };
    }
    async findOne(id, userId, userRole) {
        const withdrawal = await this.findByIdOrThrow(id);
        const isOwner = withdrawal.userId === userId;
        const isAdmin = userRole === enums_1.Role.ADMIN;
        if (!isOwner && !isAdmin) {
            throw new common_1.BadRequestException('Anda tidak memiliki akses ke resource ini');
        }
        return withdrawal;
    }
    async resolve(id, adminId, dto) {
        const withdrawal = await this.findByIdOrThrow(id);
        if (withdrawal.status !== enums_1.WithdrawalStatus.PENDING) {
            throw new common_1.BadRequestException('Withdrawal request ini sudah diproses sebelumnya');
        }
        if (dto.status === 'REJECTED') {
            return this.prisma.withdrawalRequest.update({
                where: { id },
                data: {
                    status: enums_1.WithdrawalStatus.REJECTED,
                    rejectionReason: dto.rejectionReason ?? 'Ditolak oleh admin',
                    processedById: adminId,
                },
            });
        }
        const currentUser = await this.prisma.user.findUnique({
            where: { id: withdrawal.userId },
        });
        if (!currentUser || currentUser.balance < withdrawal.amount) {
            throw new common_1.BadRequestException('Saldo user tidak lagi mencukupi untuk menyetujui penarikan ini');
        }
        const taxRate = Number(this.configService.get('WITHDRAWAL_TAX_RATE') ?? 0);
        const taxAmount = withdrawal.amount * taxRate;
        const netAmount = withdrawal.amount - taxAmount;
        const [updatedWithdrawal] = await this.prisma.$transaction([
            this.prisma.withdrawalRequest.update({
                where: { id },
                data: {
                    status: enums_1.WithdrawalStatus.APPROVED,
                    taxAmount,
                    netAmount,
                    processedById: adminId,
                },
            }),
            this.prisma.user.update({
                where: { id: withdrawal.userId },
                data: {
                    balance: { decrement: withdrawal.amount },
                },
            }),
            this.prisma.transaction.create({
                data: {
                    userId: withdrawal.userId,
                    amount: -withdrawal.amount,
                    type: 'WITHDRAWAL',
                    referenceId: withdrawal.id,
                },
            }),
        ]);
        return updatedWithdrawal;
    }
    async findByIdOrThrow(id) {
        const withdrawal = await this.prisma.withdrawalRequest.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!withdrawal) {
            throw new common_1.NotFoundException('Withdrawal request tidak ditemukan');
        }
        return withdrawal;
    }
};
exports.WithdrawalService = WithdrawalService;
exports.WithdrawalService = WithdrawalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], WithdrawalService);
//# sourceMappingURL=withdrawal.service.js.map