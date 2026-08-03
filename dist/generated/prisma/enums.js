"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueSource = exports.WithdrawalStatus = exports.DisputeStatus = exports.ClipStatus = exports.CampaignStatus = exports.Role = void 0;
exports.Role = {
    CREATOR: 'CREATOR',
    CLIPPER: 'CLIPPER',
    ADMIN: 'ADMIN'
};
exports.CampaignStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    COMPLETED: 'COMPLETED',
    BANNED: 'BANNED'
};
exports.ClipStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    REVISION_REQUESTED: 'REVISION_REQUESTED'
};
exports.DisputeStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.WithdrawalStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.RevenueSource = {
    CREATOR_FEE: 'CREATOR_FEE',
    CLIPPER_FEE: 'CLIPPER_FEE'
};
//# sourceMappingURL=enums.js.map