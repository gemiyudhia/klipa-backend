import { PrismaService } from "../prisma/prisma.service";
import { CreateClipDto } from './dto/create-clip.dto';
import { UpdateClipDto } from './dto/update-clip.dto';
import { ReviewClipDto } from './dto/review-clip.dto';
import { Role, ClipStatus } from "../../generated/prisma/enums";
import { PaginationDto } from "../common/dto/pagination.dto";
export declare class ClipService {
    private prisma;
    constructor(prisma: PrismaService);
    create(clipperId: string, dto: CreateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    findAllByClipper(clipperId: string, pagination: PaginationDto): Promise<{
        data: ({
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
            status: ClipStatus;
            videoUrl: string;
            thumbnailUrl: string | null;
            duration: number | null;
            feedback: string | null;
            payoutAmount: number | null;
            campaignId: string;
            clipperId: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findAllByCampaign(campaignId: string, userId: string, userRole: Role, pagination: PaginationDto): Promise<{
        data: ({
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
            status: ClipStatus;
            videoUrl: string;
            thumbnailUrl: string | null;
            duration: number | null;
            feedback: string | null;
            payoutAmount: number | null;
            campaignId: string;
            clipperId: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
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
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    update(id: string, userId: string, userRole: Role, dto: UpdateClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    remove(id: string, userId: string, userRole: Role): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
    review(id: string, creatorId: string, userRole: Role, dto: ReviewClipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        platformFeeAmount: number | null;
        status: ClipStatus;
        videoUrl: string;
        thumbnailUrl: string | null;
        duration: number | null;
        feedback: string | null;
        payoutAmount: number | null;
        campaignId: string;
        clipperId: string;
    }>;
}
