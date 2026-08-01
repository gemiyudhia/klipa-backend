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
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
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
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    })[]>;
    findByCampaign(campaignId: string, user: {
        sub: string;
        role: Role;
    }): Promise<({
        clipper: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    })[]>;
    findOne(id: string): Promise<{
        campaign: {
            id: string;
            title: string;
            status: import("generated/prisma/enums").CampaignStatus;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            creatorId: string;
            rewardPerClip: number;
            totalBudget: number;
            remainingBudget: number;
            vodUrl: string | null;
            deadline: Date;
        };
    } & {
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    update(id: string, user: {
        sub: string;
        role: Role;
    }, updateClipDto: UpdateClipDto): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    review(id: string, user: {
        sub: string;
        role: Role;
    }, reviewClipDto: ReviewClipDto): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    remove(id: string, user: {
        sub: string;
        role: Role;
    }): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: import("generated/prisma/enums").ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
}
