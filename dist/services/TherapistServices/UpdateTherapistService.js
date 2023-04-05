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
exports.UpdateTherapistService = void 0;
const typeorm_1 = require("typeorm");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
const TherapistEntitie_1 = require("../../entities/TherapistEntitie");
class UpdateTherapistService {
    execute({ therapist_id, name, email, password, role, office, cns, clinic_id, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(TherapistEntitie_1.Therapists);
            const clinicRepo = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            const therapistExists = yield repo.findOne({
                where: { id: therapist_id },
                relations: ['clinic'],
            });
            const clinicExists = yield clinicRepo.findOne({
                where: { id: clinic_id },
            });
            if (!therapistExists) {
                return new Error('Therapist does not exists!');
            }
            if (!clinicExists) {
                return new Error('Clinic not exists!');
            }
            therapistExists.name = name;
            therapistExists.email = email;
            therapistExists.password = password;
            therapistExists.role = role;
            therapistExists.office = office;
            therapistExists.clinic_id = clinic_id;
            therapistExists.cns = cns;
            yield repo.save(therapistExists);
            return therapistExists;
        });
    }
}
exports.UpdateTherapistService = UpdateTherapistService;
//# sourceMappingURL=UpdateTherapistService.js.map