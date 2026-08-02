export declare const Role: {
    readonly CREATOR: "CREATOR";
    readonly CLIPPER: "CLIPPER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const CampaignStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly PAUSED: "PAUSED";
    readonly COMPLETED: "COMPLETED";
};
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];
export declare const ClipStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly REVISION_REQUESTED: "REVISION_REQUESTED";
};
export type ClipStatus = (typeof ClipStatus)[keyof typeof ClipStatus];
export declare const DisputeStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus];
export declare const WithdrawalStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type WithdrawalStatus = (typeof WithdrawalStatus)[keyof typeof WithdrawalStatus];
