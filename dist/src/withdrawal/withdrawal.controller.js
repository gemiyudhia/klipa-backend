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
exports.WithdrawalController = void 0;
const common_1 = require("@nestjs/common");
const withdrawal_service_1 = require("./withdrawal.service");
const create_withdrawal_dto_1 = require("./dto/create-withdrawal.dto");
const resolve_withdrawal_dto_1 = require("./dto/resolve-withdrawal.dto");
const update_bank_info_dto_1 = require("./dto/update-bank-info.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const enums_1 = require("../../generated/prisma/enums");
let WithdrawalController = class WithdrawalController {
    withdrawalService;
    constructor(withdrawalService) {
        this.withdrawalService = withdrawalService;
    }
    updateBankInfo(userId, dto) {
        return this.withdrawalService.updateBankInfo(userId, dto);
    }
    create(userId, dto) {
        return this.withdrawalService.create(userId, dto);
    }
    findMine(userId) {
        return this.withdrawalService.findAllByUser(userId);
    }
    findAllPending() {
        return this.withdrawalService.findAllPending();
    }
    findOne(id, user) {
        return this.withdrawalService.findOne(id, user.sub, user.role);
    }
    resolve(id, adminId, dto) {
        return this.withdrawalService.resolve(id, adminId, dto);
    }
};
exports.WithdrawalController = WithdrawalController;
__decorate([
    (0, common_1.Patch)('bank-info'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bank_info_dto_1.UpdateBankInfoDto]),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "updateBankInfo", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_withdrawal_dto_1.CreateWithdrawalDto]),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.CLIPPER),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "findAllPending", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(enums_1.Role.CREATOR, enums_1.Role.CLIPPER, enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/resolve'),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, resolve_withdrawal_dto_1.ResolveWithdrawalDto]),
    __metadata("design:returntype", void 0)
], WithdrawalController.prototype, "resolve", null);
exports.WithdrawalController = WithdrawalController = __decorate([
    (0, common_1.Controller)('withdrawal'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuards, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [withdrawal_service_1.WithdrawalService])
], WithdrawalController);
//# sourceMappingURL=withdrawal.controller.js.map