"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractVoteModule = void 0;
const common_1 = require("@nestjs/common");
const extrinsic_module_1 = require("../extrinsic/extrinsic.module");
const smart_contract_vote_service_1 = require("./smart-contract-vote.service");
const smart_contract_vote_controller_1 = require("./smart-contract-vote.controller");
let SmartContractVoteModule = class SmartContractVoteModule {
};
exports.SmartContractVoteModule = SmartContractVoteModule;
exports.SmartContractVoteModule = SmartContractVoteModule = __decorate([
    (0, common_1.Module)({
        controllers: [smart_contract_vote_controller_1.SmartContractVoteController],
        imports: [extrinsic_module_1.ExtrinsicModule],
        providers: [smart_contract_vote_service_1.SmartContractVoteService],
    })
], SmartContractVoteModule);
//# sourceMappingURL=smart-contract-vote.module.js.map