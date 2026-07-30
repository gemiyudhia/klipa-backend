"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertOwnerOrAdmin = assertOwnerOrAdmin;
const common_1 = require("@nestjs/common");
function assertOwnerOrAdmin(resourceOwnerId, currentUserId, currentUserRole, message) {
    const isOwner = resourceOwnerId === currentUserId;
    const isAdmin = currentUserRole === 'ADMIN';
    if (!isOwner && !isAdmin)
        throw new common_1.ForbiddenException(message);
}
//# sourceMappingURL=authorization.util.js.map