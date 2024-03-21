"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractEvidenceService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
const api_contract_1 = require("@polkadot/api-contract");
let SmartContractEvidenceService = class SmartContractEvidenceService {
    constructor() {
        this.wsProviderEndpoint = process.env.WS_PROVIDER;
        this.wsProvider = new api_1.WsProvider(this.wsProviderEndpoint);
        this.api = api_1.ApiPromise.create({ provider: this.wsProvider });
        this.metadata = require("./../../../contract/evidence.json");
        this.contractAddress = process.env.EVIDENCE_CONTRACT_ADDRESS;
    }
    async getAllEvidence() {
        let evidenceNfts = [];
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getAllEvidence'](this.contractAddress, options));
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
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getEvidenceById'](this.contractAddress, options, id));
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
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['evidenceByCaseId'](this.contractAddress, options, caseId));
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
            const api = await this.api;
            const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
            const options = {
                storageDepositLimit: null,
                gasLimit: api.registry.createType('WeightV2', {
                    refTime: 300000000000,
                    proofSize: 500000,
                }),
            };
            const setEvidenceExtrinsic = contract.tx['setEvidence'](options, data);
            return setEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateEvidenceExtrinsic(id, data) {
        try {
            const api = await this.api;
            const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
            const options = {
                storageDepositLimit: null,
                gasLimit: api.registry.createType('WeightV2', {
                    refTime: 300000000000,
                    proofSize: 500000,
                }),
            };
            const updateEvidenceExtrinsic = contract.tx['updateEvidence'](options, id, data);
            return updateEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnEvidenceExtrinsic(id) {
        try {
            const api = await this.api;
            const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
            const options = {
                storageDepositLimit: null,
                gasLimit: api.registry.createType('WeightV2', {
                    refTime: 300000000000,
                    proofSize: 500000,
                }),
            };
            const burnEvidenceExtrinsic = contract.tx['burnEvidence'](options, id);
            return burnEvidenceExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SmartContractEvidenceService = SmartContractEvidenceService;
exports.SmartContractEvidenceService = SmartContractEvidenceService = __decorate([
    (0, common_1.Injectable)()
], SmartContractEvidenceService);
//# sourceMappingURL=smart-contract-evidence.service.js.map