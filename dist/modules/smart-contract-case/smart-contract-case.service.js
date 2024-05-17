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
exports.SmartContractCaseService = void 0;
const common_1 = require("@nestjs/common");
const extrinsic_service_1 = require("../extrinsic/extrinsic.service");
let SmartContractCaseService = class SmartContractCaseService {
    constructor(extrinsicService) {
        this.extrinsicService = extrinsicService;
        this.metadata = require("./../../../contract/case.json");
        this.contractAddress = process.env.CASE_CONTRACT_ADDRESS;
    }
    async getAllCase() {
        let caseNfts = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getAllCase");
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        caseNfts.push({
                            caseId: data[i].caseId,
                            title: data[i].title,
                            description: data[i].description,
                            category: data[i].category,
                            owner: data[i].owner,
                            bounty: data[i].bounty,
                            file: data[i].file,
                            status: data[i].status
                        });
                    }
                }
            }
        }
        return caseNfts;
    }
    async getCaseById(id) {
        let caseNft = undefined;
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getCaseById", id);
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                caseNft = {
                    caseId: data.caseId,
                    title: data.title,
                    description: data.description,
                    category: data.category,
                    owner: data.owner,
                    bounty: data.bounty,
                    file: data.file,
                    status: data.status
                };
            }
        }
        return caseNft;
    }
    async setCaseExtrinsic(data) {
        try {
            const setCaseExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "setCase", data);
            return setCaseExtrinsic;
        }
        catch (error) {
            throw error;
        }
    }
    async updateCaseExtrinsic(id, data) {
        try {
            const updateCaseExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "updateCase", id, data);
            return updateCaseExtrinsic;
        }
        catch (error) {
            throw error;
        }
    }
    async burnCaseExtrinsic(id) {
        try {
            const burnCaseExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "burnCase", id);
            return burnCaseExtrinsic;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SmartContractCaseService = SmartContractCaseService;
exports.SmartContractCaseService = SmartContractCaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [extrinsic_service_1.ExtrinsicService])
], SmartContractCaseService);
//# sourceMappingURL=smart-contract-case.service.js.map