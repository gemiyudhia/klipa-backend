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
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const campaign_service_1 = require("./campaign.service");
const create_campaign_dto_1 = require("./dto/create-campaign.dto");
const update_campaign_dto_1 = require("./dto/update-campaign.dto");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const enums_1 = require("../../generated/prisma/enums");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const campaign_expiry_task_1 = require("./task/campaign-expiry.task");
const pagination_dto_1 = require("../common/dto/pagination.dto");
let CampaignController = class CampaignController {
    campaignService;
    campaignExpiryTask;
    constructor(campaignService, campaignExpiryTask) {
        this.campaignService = campaignService;
        this.campaignExpiryTask = campaignExpiryTask;
    }
    create(creatorId, createCampaignDto) {
        return this.campaignService.create(creatorId, createCampaignDto);
    }
    findMine(creatorId, pagination) {
        return this.campaignService.findAllByCreator(creatorId, pagination);
    }
    findAllPublic(pagination) {
        return this.campaignService.findAllPublic(pagination);
    }
    findOne(id) {
        return this.campaignService.findOne(id);
    }
    update(id, updateCampaignDto, user) {
        return this.campaignService.update(id, user.sub, user.role, updateCampaignDto);
    }
    remove(id, user) {
        return this.campaignService.remove(id, user.sub, user.role);
    }
    async triggerExpiryCheck() {
        await this.campaignExpiryTask.handleExpiredCampaigns();
        return {
            message: 'Pengecekan campaign expired berhasil dijalankan manual',
        };
    }
};
exports.CampaignController = CampaignController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_campaign_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.CLIPPER, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "findAllPublic", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.ADMIN, enums_1.Role.CLIPPER),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_campaign_dto_1.UpdateCampaignDto, Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('trigger-expiry-check'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "triggerExpiryCheck", null);
exports.CampaignController = CampaignController = __decorate([
    (0, common_1.Controller)('campaign'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuards, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [campaign_service_1.CampaignService,
        campaign_expiry_task_1.CampaignExpiryTask])
], CampaignController);
//# sourceMappingURL=campaign.controller.js.map