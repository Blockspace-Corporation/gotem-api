"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractVoteService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
const api_contract_1 = require("@polkadot/api-contract");
let SmartContractVoteService = class SmartContractVoteService {
    constructor() {
        this.wsProviderEndpoint = process.env.WS_PROVIDER;
        this.wsProvider = new api_1.WsProvider(this.wsProviderEndpoint);
        this.api = api_1.ApiPromise.create({ provider: this.wsProvider });
        this.metadata = require("./../../../contract/vote.json");
        this.contractAddress = process.env.VOTE_CONTRACT_ADDRESS;
    }
    async getAllVoter() {
        let voters = [];
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getAllVoter'](this.contractAddress, options));
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        voters.push({
                            voterId: data[i].voterId,
                            caseId: data[i].caseId,
                            voter: data[i].voter,
                            amountHold: parseFloat(String(data[i].amountHold).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
                            voteCredit: parseFloat(String(data[i].voteCredit).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
                        });
                    }
                }
            }
        }
        return voters;
    }
    async getVoterById(id) {
        let voter = undefined;
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getVoterById'](this.contractAddress, options, id));
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                voter = {
                    voterId: data.voterId,
                    caseId: data.caseId,
                    voter: data.voter,
                    amountHold: parseFloat(String(data.amountHold).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
                    voteCredit: parseFloat(String(data.voteCredit).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
                };
            }
        }
        return voter;
    }
    async setVoterExtrinsic(data) {
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
            const setVoterExtrinsic = contract.tx['setVoter'](options, data);
            return setVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateVoterExtrinsic(id, data) {
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
            const updateVoterExtrinsic = contract.tx['updateVoter'](options, id, data);
            return updateVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnVoterExtrinsic(id) {
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
            const burnVoterExtrinsic = contract.tx['burnVoter'](options, id);
            return burnVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async getAllVote() {
        let votes = [];
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getAllVotes'](this.contractAddress, options));
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        votes.push({
                            voteId: data[i].voteId,
                            caseId: data[i].caseId,
                            evidenceId: data[i].evidenceId,
                            voter: data[i].voter,
                            yesCredit: data[i].yesCredit,
                            noCredit: data[i].noCredit,
                            destributionReward: data[i].destributionReward
                        });
                    }
                }
            }
        }
        return votes;
    }
    async getVoteById(id) {
        let vote = undefined;
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['getVoteById'](this.contractAddress, options, id));
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                vote = {
                    voteId: data.voteId,
                    caseId: data.caseId,
                    evidenceId: data.evidenceId,
                    voter: data.voter,
                    yesCredit: data.yesCredit,
                    noCredit: data.noCredit,
                    destributionReward: data.destributionReward
                };
            }
        }
        return vote;
    }
    async getAllVoteByEvidenceId(evidenceId) {
        let votes = [];
        const api = await this.api;
        const contract = new api_contract_1.ContractPromise(api, this.metadata, this.contractAddress);
        const options = {
            storageDepositLimit: null,
            gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
        };
        const { output } = (await contract.query['votesByEvidenceId'](this.contractAddress, options, evidenceId));
        if (output != null || output != undefined) {
            let data = JSON.parse(JSON.stringify(output))["ok"];
            if (data != null) {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        votes.push({
                            voteId: data[i].voteId,
                            caseId: data[i].caseId,
                            evidenceId: data[i].evidenceId,
                            voter: data[i].voter,
                            yesCredit: data[i].yesCredit,
                            noCredit: data[i].noCredit,
                            destributionReward: data[i].destributionReward
                        });
                    }
                }
            }
        }
        return votes;
    }
    async setVoteExtrinsic(data) {
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
            const setVoterExtrinsic = contract.tx['setVote'](options, data);
            return setVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateVoteExtrinsic(id, data) {
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
            const updateVoteExtrinsic = contract.tx['updateVote'](options, id, data);
            return updateVoteExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnVoteExtrinsic(id) {
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
            const burnVoteExtrinsic = contract.tx['burnVote'](options, id);
            return burnVoteExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SmartContractVoteService = SmartContractVoteService;
exports.SmartContractVoteService = SmartContractVoteService = __decorate([
    (0, common_1.Injectable)()
], SmartContractVoteService);
//# sourceMappingURL=smart-contract-vote.service.js.map