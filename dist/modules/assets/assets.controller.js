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
exports.AssetsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const assets_service_1 = require("./assets.service");
const transfer_extrinsic_dto_1 = require("./dto/transfer-extrinsic.dto");
let AssetsController = class AssetsController {
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
    getAssets() {
        return this.assetsService.getAssets();
    }
    getAssetBalanceByAccount(asset_id, keypair) {
        return this.assetsService.getAssetBalanceByAccount(asset_id, keypair);
    }
    transferExtrinsic(data) {
        return this.assetsService.transferExtrinsic(data);
    }
};
exports.AssetsController = AssetsController;
__decorate([
    (0, common_1.Get)('/get/assets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "getAssets", null);
__decorate([
    (0, common_1.Get)('/get/asset-balance-by-account/:asset_id/:keypair'),
    __param(0, (0, common_1.Param)('asset_id')),
    __param(1, (0, common_1.Param)('keypair')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "getAssetBalanceByAccount", null);
__decorate([
    (0, common_1.Post)('/extrinsic/transfer'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Transfer extrinsic created succesfully',
        type: transfer_extrinsic_dto_1.TransferExtrinsicDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_extrinsic_dto_1.TransferExtrinsicDto]),
    __metadata("design:returntype", Promise)
], AssetsController.prototype, "transferExtrinsic", null);
exports.AssetsController = AssetsController = __decorate([
    (0, common_1.Controller)('api/assets'),
    (0, swagger_1.ApiTags)('assets'),
    __metadata("design:paramtypes", [assets_service_1.AssetsService])
], AssetsController);
//# sourceMappingURL=assets.controller.js.map