"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartContractCaseModule = void 0;
const common_1 = require("@nestjs/common");
const smart_contract_case_service_1 = require("./smart-contract-case.service");
const smart_contract_case_controller_1 = require("./smart-contract-case.controller");
let SmartContractCaseModule = class SmartContractCaseModule {
};
exports.SmartContractCaseModule = SmartContractCaseModule;
exports.SmartContractCaseModule = SmartContractCaseModule = __decorate([
    (0, common_1.Module)({
        controllers: [smart_contract_case_controller_1.SmartContractCaseController],
        providers: [smart_contract_case_service_1.SmartContractCaseService],
    })
], SmartContractCaseModule);
//# sourceMappingURL=smart-contract-case.module.js.map