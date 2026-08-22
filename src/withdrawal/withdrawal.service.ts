import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWithdrawalDto } from './dto/create-withdrawal.dto';
import { ResolveWithdrawalDto } from './dto/resolve-withdrawal.dto';
import { UpdateBankInfoDto } from './dto/update-bank-info.dto';
import { WithdrawalStatus, Role } from '../../generated/prisma/enums';
import { buildPaginationMeta, getSkip } from '../common/utils/pagination.util';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class WithdrawalService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async updateBankInfo(userId: string, dto: UpdateBankInfoDto) {
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

  async create(userId: string, dto: CreateWithdrawalDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('User tidak ditemukan');
    }

    if (!user.bankName || !user.bankAccountNumber || !user.bankAccountName) {
      throw new BadRequestException(
        'Lengkapi data rekening bank terlebih dahulu sebelum melakukan penarikan',
      );
    }

    if (dto.amount > user.balance) {
      throw new BadRequestException('Saldo tidak mencukupi');
    }

    return this.prisma.withdrawalRequest.create({
      data: {
        userId,
        amount: dto.amount,
      },
    });
  }

  async findAllByUser(userId: string, pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.withdrawalRequest.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.withdrawalRequest.count({ where: { userId } }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async findAllPending(pagination: PaginationDto) {
    const { page = 1, limit = 10 } = pagination;
    const skip = getSkip(page, limit);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.withdrawalRequest.findMany({
        where: { status: WithdrawalStatus.PENDING },
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
        where: { status: WithdrawalStatus.PENDING },
      }),
    ]);

    return { data, meta: buildPaginationMeta(total, page, limit) };
  }

  async findOne(id: string, userId: string, userRole: Role) {
    const withdrawal = await this.findByIdOrThrow(id);

    const isOwner = withdrawal.userId === userId;
    const isAdmin = userRole === Role.ADMIN;

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException(
        'Anda tidak memiliki akses ke resource ini',
      );
    }

    return withdrawal;
  }

  async resolve(id: string, adminId: string, dto: ResolveWithdrawalDto) {
    const withdrawal = await this.findByIdOrThrow(id);

    if (withdrawal.status !== WithdrawalStatus.PENDING) {
      throw new BadRequestException(
        'Withdrawal request ini sudah diproses sebelumnya',
      );
    }

    if (dto.status === 'REJECTED') {
      return this.prisma.withdrawalRequest.update({
        where: { id },
        data: {
          status: WithdrawalStatus.REJECTED,
          rejectionReason: dto.rejectionReason ?? 'Ditolak oleh admin',
          processedById: adminId,
        },
      });
    }

    const currentUser = await this.prisma.user.findUnique({
      where: { id: withdrawal.userId },
    });

    if (!currentUser || currentUser.balance < withdrawal.amount) {
      throw new BadRequestException(
        'Saldo user tidak lagi mencukupi untuk menyetujui penarikan ini',
      );
    }

    const taxRate = Number(this.configService.get('WITHDRAWAL_TAX_RATE') ?? 0);
    const taxAmount = withdrawal.amount * taxRate;
    const netAmount = withdrawal.amount - taxAmount;

    const [updatedWithdrawal] = await this.prisma.$transaction([
      this.prisma.withdrawalRequest.update({
        where: { id },
        data: {
          status: WithdrawalStatus.APPROVED,
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

  private async findByIdOrThrow(id: string) {
    const withdrawal = await this.prisma.withdrawalRequest.findUnique({
      where: { id },
      include: { user: true },
    });

    if (!withdrawal) {
      throw new NotFoundException('Withdrawal request tidak ditemukan');
    }

    return withdrawal;
  }
}
