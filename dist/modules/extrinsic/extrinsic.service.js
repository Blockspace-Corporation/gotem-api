"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrinsicService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
let ExtrinsicService = class ExtrinsicService {
    constructor() {
        this.wsProviderEndpoint = process.env.WS_PROVIDER;
        this.wsProvider = new api_1.WsProvider(this.wsProviderEndpoint);
        this.api = api_1.ApiPromise.create({ provider: this.wsProvider });
    }
    async executeExtrinsics(extrinsics) {
        try {
            const api = await this.api;
            const executeExtrinsic = api.tx(extrinsics.signedExtrincs);
            const sendTransaction = await new Promise((resolve, reject) => {
                executeExtrinsic.send(async (result) => {
                    let message = {
                        message: "",
                        isError: true
                    };
                    if (result.isError) {
                        message = {
                            message: "Something went wrong!",
                            isError: true
                        };
                        resolve(message);
                    }
                    if (result.dispatchError) {
                        if (result.dispatchError.isModule) {
                            const decoded = api.registry.findMetaError(result.dispatchError.asModule);
                            const { docs, name, section } = decoded;
                            message = {
                                message: "Dispatch Error: " + name,
                                isError: true
                            };
                            reject(message);
                        }
                    }
                    if (result.status.isInBlock) {
                    }
                    if (result.status.isFinalized) {
                        message = {
                            message: "Execution Complete",
                            isError: false
                        };
                        resolve(message);
                    }
                }).catch(error => {
                    reject(error);
                });
            });
            return sendTransaction;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ExtrinsicService = ExtrinsicService;
exports.ExtrinsicService = ExtrinsicService = __decorate([
    (0, common_1.Injectable)()
], ExtrinsicService);
//# sourceMappingURL=extrinsic.service.js.map