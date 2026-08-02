import { PrismaService } from "../prisma/prisma.service";
import { CreateDisputeDto } from './dto/create-dispute.dto';
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
import { ClipStatus, DisputeStatus, Role } from "../../generated/prisma/enums";
export declare class DisputeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(clipperId: string, dto: CreateDisputeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
    findAllByClipper(clipperId: string): Promise<({
        clip: {
            id: string;
            title: string;
            status: ClipStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DisputeStatus;
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
            status: ClipStatus;
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
        status: DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    })[]>;
    private findByIdOrThrow;
    findOne(id: string, userId: string, userRole: Role): Promise<{
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
            status: ClipStatus;
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
        status: DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
    resolve(id: string, adminId: string, dto: ResolveDisputeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: DisputeStatus;
        clipperId: string;
        reason: string;
        resolutionNote: string | null;
        clipId: string;
        resolvedById: string | null;
    }>;
}
