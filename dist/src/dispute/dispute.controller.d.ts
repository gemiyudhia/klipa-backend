import { DisputeService } from './dispute.service';
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { Role } from "../../generated/prisma/enums";
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
export declare class DisputeController {
    private readonly disputeService;
    constructor(disputeService: DisputeService);
    create(clipperId: string, createDisputeDto: CreateDisputeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
    findMine(clipperId: string): Promise<({
        clip: {
            id: string;
            title: string;
            status: import("generated/prisma/enums").ClipStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    })[]>;
    findAllPending(): Promise<({
        clip: {
            campaign: {
                id: string;
                title: string;
                rewardPerClip: number;
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
        };
        clipper: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    })[]>;
    findOne(id: string, user: {
        sub: string;
        role: Role;
    }): Promise<{
        clip: {
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
        };
        clipper: {
            name: string;
            email: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
    resolve(id: string, adminId: string, resolveDisputeDto: ResolveDisputeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
}
