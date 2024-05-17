"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractEvidenceModule = void 0;
const common_1 = require("@nestjs/common");
const extrinsic_module_1 = require("../extrinsic/extrinsic.module");
const smart_contract_evidence_service_1 = require("./smart-contract-evidence.service");
const smart_contract_evidence_controller_1 = require("./smart-contract-evidence.controller");
let SmartContractEvidenceModule = class SmartContractEvidenceModule {
};
exports.SmartContractEvidenceModule = SmartContractEvidenceModule;
exports.SmartContractEvidenceModule = SmartContractEvidenceModule = __decorate([
    (0, common_1.Module)({
        controllers: [smart_contract_evidence_controller_1.SmartContractEvidenceController],
        imports: [extrinsic_module_1.ExtrinsicModule],
        providers: [smart_contract_evidence_service_1.SmartContractEvidenceService],
    })
], SmartContractEvidenceModule);
//# sourceMappingURL=smart-contract-evidence.module.js.map