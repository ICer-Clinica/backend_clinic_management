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
exports.ListAllByClinicClinicAdministratorService = void 0;
const typeorm_1 = require("typeorm");
const ClinicAdministratorEntitie_1 = require("../../entities/ClinicAdministratorEntitie");
class ListAllByClinicClinicAdministratorService {
    execute({ clinic_id, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(ClinicAdministratorEntitie_1.ClinicAdministrator);
            try {
                const clinicAdministrator = yield repo.find({
                    where: { clinic_id },
                });
                if (!clinicAdministrator) {
                    ('');
                    return new Error('Clinic Administrator does not exists!');
                }
                const result = clinicAdministrator.filter((adm) => {
                    return adm.id !== user_id;
                });
                return result;
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
}
exports.ListAllByClinicClinicAdministratorService = ListAllByClinicClinicAdministratorService;
//# sourceMappingURL=ListAllByClinicClinicAdministratorService.js.map