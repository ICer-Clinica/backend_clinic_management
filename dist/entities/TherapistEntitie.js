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
exports.Therapists = exports.TherapistRole = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const ClinicEntitie_1 = require("./ClinicEntitie");
var TherapistRole;
(function (TherapistRole) {
    TherapistRole["OCCUPATIONAL_THERAPY"] = "OCCUPATIONAL_THERAPY";
    TherapistRole["PSYCHOLOGY"] = "PSYCHOLOGY";
    TherapistRole["PHYSIOTHERAPY"] = "PHYSIOTHERAPY";
    TherapistRole["PHONOAUDIOLOGY"] = "PHONOAUDIOLOGY";
})(TherapistRole = exports.TherapistRole || (exports.TherapistRole = {}));
let Therapists = class Therapists {
    hashPassword() {
        this.password = bcryptjs_1.default.hashSync(this.password, 8);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Therapists.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Therapists.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TherapistRole
    }),
    __metadata("design:type", String)
], Therapists.prototype, "office", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "cns", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Therapists.prototype, "clinic_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ClinicEntitie_1.Clinic),
    (0, typeorm_1.JoinColumn)({ name: 'clinic_id' }),
    __metadata("design:type", ClinicEntitie_1.Clinic)
], Therapists.prototype, "clinic", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Therapists.prototype, "created_at", void 0);
Therapists = __decorate([
    (0, typeorm_1.Entity)('therapists')
], Therapists);
exports.Therapists = Therapists;
//# sourceMappingURL=TherapistEntitie.js.map