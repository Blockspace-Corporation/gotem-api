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
exports.SmartContractVoteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const smart_contract_vote_service_1 = require("./smart-contract-vote.service");
const set_voter_nft_dto_1 = require("./dto/set-voter-nft.dto");
const set_vote_dto_1 = require("./dto/set-vote.dto");
let SmartContractVoteController = class SmartContractVoteController {
    constructor(smartContractVoteService) {
        this.smartContractVoteService = smartContractVoteService;
    }
    getAllVoter() {
        return this.smartContractVoteService.getAllVoter();
    }
    getVoterById(id) {
        return this.smartContractVoteService.getVoterById(id);
    }
    setVoterExtrinsic(data) {
        return this.smartContractVoteService.setVoterExtrinsic(data);
    }
    getAllVote() {
        return this.smartContractVoteService.getAllVote();
    }
    getVoteById(id) {
        return this.smartContractVoteService.getVoteById(id);
    }
    async setVoteExtrinsic(data) {
        try {
            return await this.smartContractVoteService.setVoteExtrinsic(data);
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.toString() || 'Internal server error',
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.SmartContractVoteController = SmartContractVoteController;
__decorate([
    (0, common_1.Get)('/get/all-voter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "getAllVoter", null);
__decorate([
    (0, common_1.Get)('/get/voter/by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "getVoterById", null);
__decorate([
    (0, common_1.Post)('/extrinsic/set-voter'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Set voter extrinsic created succesfully',
        type: set_voter_nft_dto_1.SetVoterDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_voter_nft_dto_1.SetVoterDto]),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "setVoterExtrinsic", null);
__decorate([
    (0, common_1.Get)('/get/all-vote'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "getAllVote", null);
__decorate([
    (0, common_1.Get)('/get/vote/by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "getVoteById", null);
__decorate([
    (0, common_1.Post)('/extrinsic/set-vote'),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Set vote extrinsic created succesfully',
        type: set_vote_dto_1.SetVoteDto,
        isArray: false,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_vote_dto_1.SetVoteDto]),
    __metadata("design:returntype", Promise)
], SmartContractVoteController.prototype, "setVoteExtrinsic", null);
exports.SmartContractVoteController = SmartContractVoteController = __decorate([
    (0, common_1.Controller)('api/smart-contract/vote'),
    (0, swagger_1.ApiTags)('smart contract - vote'),
    __metadata("design:paramtypes", [smart_contract_vote_service_1.SmartContractVoteService])
], SmartContractVoteController);
//# sourceMappingURL=smart-contract-vote.controller.js.map