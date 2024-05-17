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
exports.SmartContractVoteService = void 0;
const common_1 = require("@nestjs/common");
const extrinsic_service_1 = require("../extrinsic/extrinsic.service");
let SmartContractVoteService = class SmartContractVoteService {
    constructor(extrinsicService) {
        this.extrinsicService = extrinsicService;
        this.metadata = require("./../../../contract/vote.json");
        this.contractAddress = process.env.VOTE_CONTRACT_ADDRESS;
    }
    async getAllVoter() {
        let voters = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getAllVoter");
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
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getVoterById", id);
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
            const setVoterExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "setVoter", data);
            return setVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateVoterExtrinsic(id, data) {
        try {
            const updateVoterExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "updateVoter", id, data);
            return updateVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnVoterExtrinsic(id) {
        try {
            const burnVoterExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "burnVoter", id);
            return burnVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async getAllVotes() {
        let votes = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getAllVotes");
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
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "getVoteById", id);
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
    async getAllVotesByEvidenceId(evidenceId) {
        let votes = [];
        let output = await this.extrinsicService.createContractQuery(this.metadata, this.contractAddress, "votesByEvidenceId", evidenceId);
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
            const setVoterExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "setVote", data);
            return setVoterExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async updateVoteExtrinsic(id, data) {
        try {
            const updateVoteExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "updateVote", id, data);
            return updateVoteExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
    async burnVoteExtrinsic(id) {
        try {
            const burnVoteExtrinsic = await this.extrinsicService.createContractTransaction(this.metadata, this.contractAddress, "burnVote", id);
            return burnVoteExtrinsic;
        }
        catch (error) {
            return error;
        }
    }
};
exports.SmartContractVoteService = SmartContractVoteService;
exports.SmartContractVoteService = SmartContractVoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [extrinsic_service_1.ExtrinsicService])
], SmartContractVoteService);
//# sourceMappingURL=smart-contract-vote.service.js.map