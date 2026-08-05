import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Role } from "../../generated/prisma/enums";
import { CampaignExpiryTask } from './task/campaign-expiry.task';
import { PaginationDto } from "../common/dto/pagination.dto";
export declare class CampaignController {
    private readonly campaignService;
    private readonly campaignExpiryTask;
    constructor(campaignService: CampaignService, campaignExpiryTask: CampaignExpiryTask);
    create(creatorId: string, createCampaignDto: CreateCampaignDto): Promise<{
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
    findMine(creatorId: string, pagination: PaginationDto): Promise<{
        data: {
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
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllPublic(pagination: PaginationDto): Promise<{
        data: {
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
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
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
    update(id: string, updateCampaignDto: UpdateCampaignDto, user: {
        sub: string;
        role: Role;
    }): Promise<{
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
    remove(id: string, user: {
        sub: string;
        role: Role;
    }): Promise<{
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
    triggerExpiryCheck(): Promise<{
        message: string;
    }>;
}
