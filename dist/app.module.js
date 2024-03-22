"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const assets_module_1 = require("./modules/assets/assets.module");
const smart_contract_case_module_1 = require("./modules/smart-contract-case/smart-contract-case.module");
const smart_contract_evidence_module_1 = require("./modules/smart-contract-evidence/smart-contract-evidence.module");
const smart_contract_vote_module_1 = require("./modules/smart-contract-vote/smart-contract-vote.module");
const extrinsic_module_1 = require("./modules/extrinsic/extrinsic.module");
const smart_contract_gtx_module_1 = require("./modules/smart-contract-gtx/smart-contract-gtx.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            assets_module_1.AssetsModule,
            smart_contract_case_module_1.SmartContractCaseModule,
            smart_contract_evidence_module_1.SmartContractEvidenceModule,
            smart_contract_vote_module_1.SmartContractVoteModule,
            extrinsic_module_1.ExtrinsicModule,
            smart_contract_gtx_module_1.SmartContractGtxModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map