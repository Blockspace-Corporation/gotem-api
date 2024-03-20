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
exports.TransferExtrinsicDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TransferExtrinsicDto {
    constructor() {
        this.id = 0;
        this.target = "";
        this.amount = 0;
    }
}
exports.TransferExtrinsicDto = TransferExtrinsicDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'This is a required property' }),
    __metadata("design:type", Number)
], TransferExtrinsicDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], TransferExtrinsicDto.prototype, "target", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'This is an optional property' }),
    __metadata("design:type", Number)
], TransferExtrinsicDto.prototype, "amount", void 0);
//# sourceMappingURL=transfer-extrinsic.dto.js.map