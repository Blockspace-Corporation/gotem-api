"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const api_1 = require("@polkadot/api");
const util_1 = require("@polkadot/util");
let AssetsService = class AssetsService {
    constructor() {
        this.wsProviderEndpoint = process.env.WS_PROVIDER;
        this.wsProvider = new api_1.WsProvider(this.wsProviderEndpoint);
        this.api = api_1.ApiPromise.create({ provider: this.wsProvider });
    }
    async getAssets() {
        const api = await this.api;
        return new Promise(async (resolve, reject) => {
            let assets = [];
            let assetMetadatas = [];
            const getAssetMetadata = await api.query["assets"]["metadata"].entries();
            getAssetMetadata.forEach(([{ args: [id] }, data]) => {
                let jsonData = JSON.parse(data.toString());
                assetMetadatas.push({
                    asset_id: parseInt(id.toString()),
                    deposit: jsonData.deposit,
                    name: (0, util_1.hexToString)(jsonData.name),
                    symbol: (0, util_1.hexToString)(jsonData.symbol),
                    decimals: jsonData.decimals,
                    isFrozen: jsonData.isFrozen,
                });
            });
            const getAssets = await api.query["assets"]["asset"].entries();
            getAssets.forEach(([{ args: [id] }, data]) => {
                let jsonData = JSON.parse(data.toString());
                let metadatas = assetMetadatas.filter(d => d.asset_id == parseInt(id.toString()));
                assets.push({
                    id: parseInt(id.toString()),
                    accounts: jsonData.accounts,
                    admin: jsonData.admin,
                    approvals: jsonData.approvals,
                    deposit: jsonData.deposit,
                    freezer: jsonData.freezer,
                    isSufficient: jsonData.isSufficient,
                    issuer: jsonData.issuer,
                    minBalance: jsonData.minBalance,
                    owner: jsonData.owner,
                    status: jsonData.status,
                    sufficients: jsonData.sufficients,
                    supply: jsonData.supply,
                    metadata: metadatas[0]
                });
            });
            let listAssets = assets.filter(d => d.metadata != undefined);
            resolve(listAssets);
        });
    }
    async getAssetBalanceByAccount(asset_id, keypair) {
        const api = await this.api;
        return new Promise(async (resolve, reject) => {
            if (api.query["assets"] != null || undefined) {
                const getAssetByAccount = (await api.query["assets"]["account"](asset_id, keypair));
                if (getAssetByAccount.isEmpty == false) {
                    let data = getAssetByAccount.toHuman();
                    let balance = data.balance;
                    let newBalance = parseFloat(String(balance).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS));
                    resolve(newBalance);
                }
            }
            resolve(0);
        });
    }
    async transferExtrinsic(data) {
        const api = await this.api;
        const transferExtrinsic = api.tx["assets"]["transfer"](data.id, data.target, BigInt(data.amount * (10 ** parseInt(process.env.DECIMALS))));
        return transferExtrinsic;
    }
};
exports.AssetsService = AssetsService;
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)()
], AssetsService);
//# sourceMappingURL=assets.service.js.map