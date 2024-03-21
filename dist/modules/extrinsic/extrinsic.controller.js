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
exports.ExtrinsicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const extrinsic_service_1 = require("./extrinsic.service");
const execute_extrinsics_dto_1 = require("./dto/execute-extrinsics.dto");
let ExtrinsicController = class ExtrinsicController {
    constructor(extrinsicService) {
        this.extrinsicService = extrinsicService;
    }
    async executeExtrinsics(data) {
        try {
            return await this.extrinsicService.executeExtrinsics(data);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.toString() || 'Internal server error',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ExtrinsicController = ExtrinsicController;
__decorate([
    (0, common_1.Post)('/execute'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Executes the signed extrinsics hex value.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [execute_extrinsics_dto_1.ExecuteExtrinsicsDto]),
    __metadata("design:returntype", Promise)
], ExtrinsicController.prototype, "executeExtrinsics", null);
exports.ExtrinsicController = ExtrinsicController = __decorate([
    (0, common_1.Controller)('api/extrinsic'),
    (0, swagger_1.ApiTags)('Extrinsic'),
    __metadata("design:paramtypes", [extrinsic_service_1.ExtrinsicService])
], ExtrinsicController);
//# sourceMappingURL=extrinsic.controller.js.map