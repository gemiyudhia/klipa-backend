import { ClipService } from './clip.service';
import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { Role } from "../../generated/prisma/enums";
import { ReviewClipDto } from './dto/review-clip.dto';
export declare class ClipController {
    private readonly clipService;
    constructor(clipService: ClipService);
    create(clipperId: string, createClipDto: CreateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    findMine(clipperId: string): Promise<({
        campaign: {
            id: string;
            title: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    })[]>;
    findByCampaign(campaignId: string, user: {
        sub: string;
        role: Role;
    }): Promise<({
        clipper: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    })[]>;
    findOne(id: string): Promise<{
        campaign: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    update(id: string, user: {
        sub: string;
        role: Role;
    }, updateClipDto: UpdateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    review(id: string, user: {
        sub: string;
        role: Role;
    }, reviewClipDto: ReviewClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    remove(id: string, user: {
        sub: string;
        role: Role;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
}
