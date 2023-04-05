"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientService = void 0;
const typeorm_1 = require("typeorm");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
const PatientEntitie_1 = require("../../entities/PatientEntitie");
class CreatePatientService {
    execute({ name, sus_card, phone, cpf, birth_date, clinic_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(PatientEntitie_1.Patient);
            const clinicRepo = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            const patientExists = yield repo.findOne({
                where: { sus_card },
            });
            const clinicExists = yield clinicRepo.findOne({ where: { id: clinic_id } });
            if (patientExists) {
                return new Error('Patient already exists!');
            }
            if (!clinicExists) {
                return new Error('Clinic does not exists!');
            }
            const patient = repo.create({
                name,
                sus_card,
                phone,
                cpf,
                birth_date,
                clinic_id,
            });
            yield repo.save(patient);
            return patient;
        });
    }
}
exports.CreatePatientService = CreatePatientService;
//# sourceMappingURL=CreatePatientService.js.map