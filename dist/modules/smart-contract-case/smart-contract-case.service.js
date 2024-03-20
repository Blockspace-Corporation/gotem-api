"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractCaseService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
const api_contract_1 = require("@polkadot/api-contract");
let SmartContractCaseService = class SmartContractCaseService {
    constructor() {
        this.wsProviderEndpoint = process.env.WS_PROVIDER;
        this.wsProvider = new api_1.WsProvider(this.wsProviderEndpoint);
        this.api = api_1.ApiPromise.create({ provider: this.wsProvider });
        this.metadata = require("./../../../contract/case.json");
        this.contractAddress = process.env.CASE_CONTRACT_ADDRESS;
    }
    async getAllCase() {
        return new Promise(async (resolve, reject) => {
            let caseNfts = [];
            const api = await this.api;
            const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
            const options = {
                storageDepositLimit: null,
                gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
            };
            const { output } = (await contract.query['getAllCase'](this.contractAddress, options));
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
            resolve(caseNfts);
        });
    }
    async getCaseById(id) {
        return new Promise(async (resolve, reject) => {
            let caseNft = undefined;
            const api = await this.api;
            const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
            const options = {
                storageDepositLimit: null,
                gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
            };
            const { output } = (await contract.query['getCaseById'](this.contractAddress, options, id));
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
            resolve(caseNft);
        });
    }
    async setCaseExtrinsic(data) {
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', {
                refTime: 300000000000,
                proofSize: 500000,
            }),
        };
        const setCaseExtrinsic = contract.tx['setCase'](options, data);
        return setCaseExtrinsic;
    }
};
exports.SmartContractCaseService = SmartContractCaseService;
exports.SmartContractCaseService = SmartContractCaseService = __decorate([
    (0, common_1.Injectable)()
], SmartContractCaseService);
//# sourceMappingURL=smart-contract-case.service.js.map