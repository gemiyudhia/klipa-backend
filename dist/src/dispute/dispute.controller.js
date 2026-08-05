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
exports.DisputeController = void 0;
const common_1 = require("@nestjs/common");
const dispute_service_1 = require("./dispute.service");
const create_dispute_dto_1 = require("./dto/create-dispute.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const enums_1 = require("../../generated/prisma/enums");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const resolve_dispute_dto_1 = require("./dto/resolve-dispute.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
let DisputeController = class DisputeController {
    disputeService;
    constructor(disputeService) {
        this.disputeService = disputeService;
    }
    create(clipperId, createDisputeDto) {
        return this.disputeService.create(clipperId, createDisputeDto);
    }
    findMine(clipperId, pagination) {
        return this.disputeService.findAllByClipper(clipperId, pagination);
    }
    findAllPending(pagination) {
        return this.disputeService.findAllPending(pagination);
    }
    findOne(id, user) {
        return this.disputeService.findOne(id, user.sub, user.role);
    }
    resolve(id, adminId, resolveDisputeDto) {
        return this.disputeService.resolve(id, adminId, resolveDisputeDto);
    }
};
exports.DisputeController = DisputeController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_dispute_dto_1.CreateDisputeDto]),
    __metadata("design:returntype", void 0)
], DisputeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], DisputeController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], DisputeController.prototype, "findAllPending", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN, enums_1.Role.CLIPPER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DisputeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/resolve'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, resolve_dispute_dto_1.ResolveDisputeDto]),
    __metadata("design:returntype", void 0)
], DisputeController.prototype, "resolve", null);
exports.DisputeController = DisputeController = __decorate([
    (0, common_1.Controller)('dispute'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuards, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [dispute_service_1.DisputeService])
], DisputeController);
//# sourceMappingURL=dispute.controller.js.map