"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipController = void 0;
const common_1 = require("@nestjs/common");
const clip_service_1 = require("./clip.service");
const create_clip_dto_1 = require("./dto/create-clip.dto");
const update_clip_dto_1 = require("./dto/update-clip.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const enums_1 = require("../../generated/prisma/enums");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const review_clip_dto_1 = require("./dto/review-clip.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
let ClipController = class ClipController {
    clipService;
    constructor(clipService) {
        this.clipService = clipService;
    }
    create(clipperId, createClipDto) {
        return this.clipService.create(clipperId, createClipDto);
    }
    findMine(clipperId, pagination) {
        return this.clipService.findAllByClipper(clipperId, pagination);
    }
    findByCampaign(campaignId, user, pagination) {
        return this.clipService.findAllByCampaign(campaignId, user.sub, user.role, pagination);
    }
    findOne(id) {
        return this.clipService.findOne(id);
    }
    update(id, user, updateClipDto) {
        return this.clipService.update(id, user.sub, user.role, updateClipDto);
    }
    review(id, user, reviewClipDto) {
        return this.clipService.review(id, user.sub, user.role, reviewClipDto);
    }
    remove(id, user) {
        return this.clipService.remove(id, user.sub, user.role);
    }
};
exports.ClipController = ClipController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_clip_dto_1.CreateClipDto]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('by-campaign/:campaignId'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN, enums_1.Role.CREATOR),
    __param(0, (0, common_1.Param)('campaignId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "findByCampaign", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN, enums_1.Role.CLIPPER, enums_1.Role.CREATOR),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN, enums_1.Role.CLIPPER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_clip_dto_1.UpdateClipDto]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/review'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, review_clip_dto_1.ReviewClipDto]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "review", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CLIPPER, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClipController.prototype, "remove", null);
exports.ClipController = ClipController = __decorate([
    (0, common_1.Controller)('clip'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuards, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [clip_service_1.ClipService])
], ClipController);
//# sourceMappingURL=clip.controller.js.map