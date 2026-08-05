import { ConfigService } from '@nestjs/config';
import { PrismaService } from "../prisma/prisma.service";
import { CreateWithdrawalDto } from './dto/create-withdrawal.dto';
import { ResolveWithdrawalDto } from './dto/resolve-withdrawal.dto';
import { UpdateBankInfoDto } from './dto/update-bank-info.dto';
import { WithdrawalStatus, Role } from "../../generated/prisma/enums";
import { PaginationDto } from "../common/dto/pagination.dto";
export declare class WithdrawalService {
    private prisma;
    private configService;
    constructor(prisma: PrismaService, configService: ConfigService);
    updateBankInfo(userId: string, dto: UpdateBankInfoDto): Promise<{
        id: string;
        bankName: string | null;
        bankAccountNumber: string | null;
        bankAccountName: string | null;
    }>;
    create(userId: string, dto: CreateWithdrawalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }>;
    findAllByUser(userId: string, pagination: PaginationDto): Promise<{
        data: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: WithdrawalStatus;
            amount: number;
            userId: string;
            taxAmount: number | null;
            netAmount: number | null;
            rejectionReason: string | null;
            processedById: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllPending(pagination: PaginationDto): Promise<{
        data: ({
            user: {
                name: string;
                email: string;
                id: string;
                bankName: string | null;
                bankAccountNumber: string | null;
                bankAccountName: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: WithdrawalStatus;
            amount: number;
            userId: string;
            taxAmount: number | null;
            netAmount: number | null;
            rejectionReason: string | null;
            processedById: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string, userId: string, userRole: Role): Promise<{
        user: {
            name: string;
            email: string;
            id: string;
            passwordHash: string;
            avatarUrl: string | null;
            role: Role;
            balance: number;
            createdAt: Date;
            updatedAt: Date;
            hashedRefreshToken: string | null;
            bankName: string | null;
            bankAccountNumber: string | null;
            bankAccountName: string | null;
            isSuspended: boolean;
            suspendedReason: string | null;
            suspendedAt: Date | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }>;
    resolve(id: string, adminId: string, dto: ResolveWithdrawalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }>;
    private findByIdOrThrow;
}
