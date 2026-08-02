import { PrismaService } from "../../prisma/prisma.service";
export declare class CampaignExpiryTask {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    handleExpiredCampaigns(): Promise<void>;
}
