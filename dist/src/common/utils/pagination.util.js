"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPaginationMeta = buildPaginationMeta;
exports.getSkip = getSkip;
function buildPaginationMeta(total, page, limit) {
    return {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
function getSkip(page, limit) {
    return (page - 1) * limit;
}
//# sourceMappingURL=pagination.util.js.map