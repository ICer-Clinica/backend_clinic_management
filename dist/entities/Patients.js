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
exports.Patient = void 0;
var typeorm_1 = require("typeorm");
var ClinicEntitie_1 = require("./ClinicEntitie");
var Patient = /** @class */ (function () {
    function Patient() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Patient.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "sus_card", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "birth_date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Patient.prototype, "clinic_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ClinicEntitie_1.Clinic; }),
        (0, typeorm_1.JoinColumn)({ name: 'clinic_id' }),
        __metadata("design:type", ClinicEntitie_1.Clinic)
    ], Patient.prototype, "clinic", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Patient.prototype, "created_at", void 0);
    Patient = __decorate([
        (0, typeorm_1.Entity)('patients')
    ], Patient);
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=Patients.js.map