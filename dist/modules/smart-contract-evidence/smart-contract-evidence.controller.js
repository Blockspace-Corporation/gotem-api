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
exports.SmartContractEvidenceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const smart_contract_evidence_service_1 = require("./smart-contract-evidence.service");
const set_evidence_nft_dto_1 = require("./dto/set-evidence-nft.dto");
const update_evidence_nft_dto_1 = require("./dto/update-evidence-nft.dto");
let SmartContractEvidenceController = class SmartContractEvidenceController {
    constructor(smartContractEvidenceService) {
        this.smartContractEvidenceService = smartContractEvidenceService;
    }
    getAllEvidence() {
        return this.smartContractEvidenceService.getAllEvidence();
    }
    getEvidenceById(id) {
        return this.smartContractEvidenceService.getEvidenceById(id);
    }
    getAllEvidenceByCaseId(case_id) {
        return this.smartContractEvidenceService.getAllEvidenceByCaseId(case_id);
    }
    async setEvidenceExtrinsic(data) {
        try {
            return await this.smartContractEvidenceService.setEvidenceExtrinsic(data);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.toString() || 'Internal server error',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateEvidenceExtrinsic(id, data) {
        try {
            return await this.smartContractEvidenceService.updateEvidenceExtrinsic(id, data);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.toString() || 'Internal server error',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async burnEvidenceExtrinsic(id) {
        try {
            return await this.smartContractEvidenceService.burnEvidenceExtrinsic(id);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.toString() || 'Internal server error',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SmartContractEvidenceController = SmartContractEvidenceController;
__decorate([
    (0, common_1.Get)('/get/all-evidence'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns an array of records.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "getAllEvidence", null);
__decorate([
    (0, common_1.Get)('/get/evidence/by-id/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the current record.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "getEvidenceById", null);
__decorate([
    (0, common_1.Get)('/get/all-evidence/by-case-id/:case_id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns an array of records.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('case_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "getAllEvidenceByCaseId", null);
__decorate([
    (0, common_1.Post)('/extrinsic/set-evidence'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_evidence_nft_dto_1.SetEvidenceNftDto]),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "setEvidenceExtrinsic", null);
__decorate([
    (0, common_1.Put)('/extrinsic/update-evidence/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Record not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_evidence_nft_dto_1.UpdateEvidenceNftDto]),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "updateEvidenceExtrinsic", null);
__decorate([
    (0, common_1.Delete)('/extrinsic/burn-evidence/:id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Record not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SmartContractEvidenceController.prototype, "burnEvidenceExtrinsic", null);
exports.SmartContractEvidenceController = SmartContractEvidenceController = __decorate([
    (0, common_1.Controller)('api/smart-contract/evidence'),
    (0, swagger_1.ApiTags)('smart contract - evidence'),
    __metadata("design:paramtypes", [smart_contract_evidence_service_1.SmartContractEvidenceService])
], SmartContractEvidenceController);
//# sourceMappingURL=smart-contract-evidence.controller.js.map