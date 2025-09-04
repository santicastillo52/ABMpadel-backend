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
exports.Court = exports.CourtType = exports.WallType = void 0;
const typeorm_1 = require("typeorm");
var WallType;
(function (WallType) {
    WallType["ACRYLIC"] = "acrylic";
    WallType["CEMENT"] = "cement";
})(WallType || (exports.WallType = WallType = {}));
var CourtType;
(function (CourtType) {
    CourtType["INDOOR"] = "indoor";
    CourtType["OUTDOOR"] = "outdoor";
})(CourtType || (exports.CourtType = CourtType = {}));
let Court = class Court extends typeorm_1.BaseEntity {
};
exports.Court = Court;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Court.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 100 }),
    __metadata("design:type", String)
], Court.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { enum: WallType }),
    __metadata("design:type", String)
], Court.prototype, "wall_type", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { enum: CourtType }),
    __metadata("design:type", String)
], Court.prototype, "court_type", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], Court.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { default: true }),
    __metadata("design:type", Boolean)
], Court.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.Column)("json"),
    __metadata("design:type", Array)
], Court.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Court.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Court.prototype, "updatedAd", void 0);
exports.Court = Court = __decorate([
    (0, typeorm_1.Entity)()
], Court);
//# sourceMappingURL=court.js.map