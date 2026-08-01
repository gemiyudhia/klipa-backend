import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { PrismaService } from "../prisma/prisma.service";
import { ClipStatus, Role } from "../../generated/prisma/enums";
import { ReviewClipDto } from './dto/review-clip.dto';
export declare class ClipService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(clipperId: string, createClipDto: CreateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    }>;
    findAllByClipper(clipperId: string): Promise<({
        campaign: {
            id: string;
            title: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    })[]>;
    findAllByCampaign(campaignId: string, userId: string, userRole: Role): Promise<({
        clipper: {
            name: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
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
            vodUrl: string | null;
            status: import("generated/prisma/enums").CampaignStatus;
            deadline: Date;
            creatorId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    }>;
    update(id: string, userId: string, userRole: Role, updateClipDto: UpdateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    }>;
    remove(id: string, userId: string, userRole: Role): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    }>;
    review(id: string, creatorId: string, userRole: Role, reviewClipDto: ReviewClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        campaignId: string;
        clipperId: string;
    }>;
}
