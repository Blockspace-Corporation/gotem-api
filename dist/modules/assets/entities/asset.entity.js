"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetEntity = void 0;
const asset_metadata_entity_1 = require("./asset-metadata.entity");
class AssetEntity {
    constructor() {
        this.id = 0;
        this.accounts = 0;
        this.admin = "";
        this.approvals = "";
        this.deposit = 0;
        this.freezer = "";
        this.isSufficient = false;
        this.issuer = "";
        this.minBalance = 0;
        this.owner = "";
        this.status = "";
        this.sufficients = 0;
        this.supply = 0;
        this.metadata = new asset_metadata_entity_1.AssetMetadataEntity();
    }
}
exports.AssetEntity = AssetEntity;
//# sourceMappingURL=asset.entity.js.map