import { CreateDisputeDto } from './dto/create-dispute.dto';
import { PrismaService } from "../prisma/prisma.service";
import { ClipStatus, DisputeStatus, Role } from "../../generated/prisma/enums";
import { ResolveDisputeDto } from './dto/resolve-dispute.dto';
export declare class DisputeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(clipperId: string, createDisputeDto: CreateDisputeDto): Promise<{
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
    findAllClipper(clipperId: string): Promise<({
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
            status: ClipStatus;
            videoUrl: string;
            thumbnailUrl: string | null;
            duration: number | null;
            feedback: string | null;
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
    resolve(id: string, adminId: string, resolveDisputeDto: ResolveDisputeDto): Promise<{
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
