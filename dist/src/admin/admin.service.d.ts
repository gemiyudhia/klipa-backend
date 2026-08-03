import { PrismaService } from "../prisma/prisma.service";
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CampaignStatus, Role } from "../../generated/prisma/enums";
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    suspendUser(userId: string, suspendUserDto: SuspendUserDto): Promise<{
        id: string;
        email: string;
        name: string;
        isSuspended: boolean;
        suspendedReason: string | null;
        suspendedAt: Date | null;
    }>;
    unsuspendUser(userId: string): Promise<{
        id: string;
        email: string;
        name: string;
        isSuspended: boolean;
    }>;
    closeCampign(campaignId: string, suspendUserDto: SuspendUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        creatorId: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        platformFeeAmount: number;
        totalCharged: number;
        vodUrl: string | null;
        status: CampaignStatus;
        deadline: Date;
        bannedReason: string | null;
        bannedAt: Date | null;
    }>;
    getAnalytics(): Promise<{
        users: {
            total: number;
            byRole: {
                role: Role;
                count: number;
            }[];
        };
        campaign: {
            total: number;
            byStatus: {
                status: CampaignStatus;
                count: number;
            }[];
        };
        clips: {
            total: number;
            byStatus: {
                status: import("generated/prisma/enums").ClipStatus;
                count: number;
            }[];
        };
        pendingActions: {
            dispute: number;
            withdrawals: number;
        };
        revenue: {
            total: number;
            bySource: {
                source: import("generated/prisma/enums").RevenueSource;
                amount: number;
            }[];
        };
        transactionVolume: number;
    }>;
}
