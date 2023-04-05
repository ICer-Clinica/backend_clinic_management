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
exports.ListAllAdministrativeSecretaries = void 0;
const typeorm_1 = require("typeorm");
const AdministrativeSecretaryEntitie_1 = require("../../entities/AdministrativeSecretaryEntitie");
class ListAllAdministrativeSecretaries {
    execute({ clinic_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(AdministrativeSecretaryEntitie_1.AdministrativeSecretary);
            try {
                const admSecretaries = yield repo.find({ where: { clinic_id } });
                if (!admSecretaries) {
                    return new Error('Clinic does not have any Administrative Secretary.');
                }
                return admSecretaries;
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
}
exports.ListAllAdministrativeSecretaries = ListAllAdministrativeSecretaries;
//# sourceMappingURL=ListAllAdministrativeSecretaries.js.map