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
exports.UpdatePatientService = void 0;
const typeorm_1 = require("typeorm");
const PatientEntitie_1 = require("../../entities/PatientEntitie");
class UpdatePatientService {
    execute({ patient_id, name, sus_card, phone, cpf, birth_date, clinic_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(PatientEntitie_1.Patient);
            const patientExists = yield repo.findOne({
                where: { id: patient_id },
                relations: ['clinic'],
            });
            if (!patientExists) {
                return new Error('Patient does not exists!');
            }
            patientExists.name = name;
            patientExists.sus_card = sus_card;
            patientExists.phone = phone;
            patientExists.cpf = cpf;
            patientExists.birth_date = birth_date;
            patientExists.clinic_id = clinic_id;
            yield repo.save(patientExists);
            return patientExists;
        });
    }
}
exports.UpdatePatientService = UpdatePatientService;
//# sourceMappingURL=UpdatePatientService.js.map