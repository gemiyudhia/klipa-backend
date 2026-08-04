import { AdminService } from './admin.service';
import { Role } from "../../generated/prisma/enums";
import { SuspendUserDto } from './dto/suspend-user.dto';
import { CloseCampaignDto } from './dto/close-campaign.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    suspendUser(id: string, suspendUserDto: SuspendUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        isSuspended: boolean;
        suspendedReason: string | null;
        suspendedAt: Date | null;
    }>;
    unsuspendUser(id: string): Promise<{
        name: string;
        email: string;
        id: string;
        isSuspended: boolean;
    }>;
    closeCampaign(id: string, closeCampaignDto: CloseCampaignDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        platformFeeAmount: number;
        totalCharged: number;
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
        bannedReason: string | null;
        bannedAt: Date | null;
        creatorId: string;
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
                status: import("generated/prisma/enums").CampaignStatus;
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
