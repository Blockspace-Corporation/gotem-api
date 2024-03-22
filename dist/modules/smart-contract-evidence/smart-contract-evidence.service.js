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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractEvidenceService = void 0;
const common_1 = require("@nestjs/common");
const extrinsic_service_1 = require("../extrinsic/extrinsic.service");
let SmartContractEvidenceService = class SmartContractEvidenceService {
    constructor(extrinsicService) {
        this.extrinsicService = extrinsicService;
        this.metadata = require("./../../../contract/evidence.json");
        this.contractAddress = process.env.EVIDENCE_CONTRACT_ADDRESS;
    }
    async getAllEvidence() {
        let evidenceNfts = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getAllEvidence");
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        evidenceNfts.push({
                            evidenceId: data[i].evidenceId,
                            description: data[i].description,
                            owner: data[i].owner,
                            file: data[i].file,
                            caseId: data[i].caseId,
                            caseTitle: data[i].caseTitle,
                            status: data[i].status
                        });
                    }
                }
            }
        }
        return evidenceNfts;
    }
    async getEvidenceById(id) {
        let evidenceNft = undefined;
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getEvidenceById", id);
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                evidenceNft = {
                    evidenceId: data.evidenceId,
                    description: data.description,
                    owner: data.owner,
                    file: data.file,
                    caseId: data.caseId,
                    caseTitle: data.caseTitle,
                    status: data.status
                };
            }
        }
        return evidenceNft;
    }
    async getAllEvidenceByCaseId(caseId) {
        let evidenceNfts = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "evidenceByCaseId", caseId);
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        evidenceNfts.push({
                            evidenceId: data[i].evidenceId,
                            description: data[i].description,
                            owner: data[i].owner,
                            file: data[i].file,
                            caseId: data[i].caseId,
                            caseTitle: data[i].caseTitle,
                            status: data[i].status
                        });
                    }
                }
            }
        }
        return evidenceNfts;
    }
    async setEvidenceExtrinsic(data) {
        try {
            const setEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "setEvidence", data);
            return setEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateEvidenceExtrinsic(id, data) {
        try {
            const updateEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "updateEvidence", id, data);
            return updateEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnEvidenceExtrinsic(id) {
        try {
            const burnEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "burnEvidence", id);
            return burnEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SmartContractEvidenceService = SmartContractEvidenceService;
exports.SmartContractEvidenceService = SmartContractEvidenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [extrinsic_service_1.ExtrinsicService])
], SmartContractEvidenceService);
//# sourceMappingURL=smart-contract-evidence.service.js.map