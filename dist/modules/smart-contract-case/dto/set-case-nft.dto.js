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
exports.SetCaseNftDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SetCaseNftDto {
    constructor() {
        this.title = "";
        this.description = "";
        this.category = "";
        this.owner = "";
        this.bounty = 0;
        this.file = "";
        this.status = "";
    }
}
exports.SetCaseNftDto = SetCaseNftDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: 'This is a required property' }),
    __metadata("design:type", Number)
], SetCaseNftDto.prototype, "bounty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "file", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'This is a required property' }),
    __metadata("design:type", String)
], SetCaseNftDto.prototype, "status", void 0);
//# sourceMappingURL=set-case-nft.dto.js.map