import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Role } from "../../generated/prisma/enums";
export declare class CampaignController {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    create(creatorId: string, createCampaignDto: CreateCampaignDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
        creatorId: string;
    }>;
    findMine(creatorId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
        creatorId: string;
    }[]>;
    findAllPublic(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
        creatorId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        rewardPerClip: number;
        totalBudget: number;
        remainingBudget: number;
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
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
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
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
        vodUrl: string | null;
        status: import("generated/prisma/enums").CampaignStatus;
        deadline: Date;
        creatorId: string;
    }>;
}
