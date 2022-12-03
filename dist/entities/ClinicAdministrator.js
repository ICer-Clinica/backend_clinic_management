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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicAdministrator = void 0;
var typeorm_1 = require("typeorm");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var ClinicEntitie_1 = require("./ClinicEntitie");
var ClinicAdministrator = /** @class */ (function () {
    function ClinicAdministrator() {
    }
    ClinicAdministrator.prototype.hashPassword = function () {
        this.password = bcryptjs_1.default.hashSync(this.password, 8);
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ClinicAdministrator.prototype, "hashPassword", null);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClinicAdministrator.prototype, "clinic_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ClinicEntitie_1.Clinic; }),
        (0, typeorm_1.JoinColumn)({ name: 'clinic_id' }),
        __metadata("design:type", ClinicEntitie_1.Clinic)
    ], ClinicAdministrator.prototype, "clinic", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], ClinicAdministrator.prototype, "created_at", void 0);
    ClinicAdministrator = __decorate([
        (0, typeorm_1.Entity)('clinic_administrators')
    ], ClinicAdministrator);
    return ClinicAdministrator;
}());
exports.ClinicAdministrator = ClinicAdministrator;
//# sourceMappingURL=ClinicAdministrator.js.map