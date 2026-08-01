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
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
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
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    })[]>;
    findAllByCampaign(campaignId: string, userId: string, userRole: Role): Promise<({
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
        status: ClipStatus;
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
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    update(id: string, userId: string, userRole: Role, updateClipDto: UpdateClipDto): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    remove(id: string, userId: string, userRole: Role): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
    review(id: string, creatorId: string, userRole: Role, reviewClipDto: ReviewClipDto): Promise<{
        id: string;
        title: string;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        status: ClipStatus;
        feedback: string | null;
        createdAt: Date;
        updatedAt: Date;
        campaignId: string;
        clipperId: string;
    }>;
}
