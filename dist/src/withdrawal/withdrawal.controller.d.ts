import { WithdrawalService } from './withdrawal.service';
import { CreateWithdrawalDto } from './dto/create-withdrawal.dto';
import { ResolveWithdrawalDto } from './dto/resolve-withdrawal.dto';
import { UpdateBankInfoDto } from './dto/update-bank-info.dto';
import { Role } from "../../generated/prisma/enums";
export declare class WithdrawalController {
    private readonly withdrawalService;
    constructor(withdrawalService: WithdrawalService);
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
        status: import("generated/prisma/enums").WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }>;
    findMine(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }[]>;
    findAllPending(): Promise<({
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
        status: import("generated/prisma/enums").WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    })[]>;
    findOne(id: string, user: {
        sub: string;
        role: Role;
    }): Promise<{
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").WithdrawalStatus;
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
        status: import("generated/prisma/enums").WithdrawalStatus;
        amount: number;
        userId: string;
        taxAmount: number | null;
        netAmount: number | null;
        rejectionReason: string | null;
        processedById: string | null;
    }>;
}
