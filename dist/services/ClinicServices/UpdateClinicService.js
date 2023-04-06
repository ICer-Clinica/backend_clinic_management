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
exports.UpdateClinicService = void 0;
const typeorm_1 = require("typeorm");
const AddressEntitie_1 = require("../../entities/AddressEntitie");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
class UpdateClinicService {
    execute({ clinic_id, cnpj, email, phone, name, address_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            const repoAddress = (0, typeorm_1.getRepository)(AddressEntitie_1.Address);
            const clinicExists = yield repo.findOne({
                where: { id: clinic_id },
                relations: ['address'],
            });
            const addressExists = yield repoAddress.findOne({
                where: { id: address_id },
            });
            if (!clinicExists) {
                return new Error('Clinic does not exists!');
            }
            if (!addressExists) {
                return new Error('Address does not exists!');
            }
            clinicExists.name = name;
            clinicExists.cnpj = cnpj;
            if (email) {
                clinicExists.email = email;
            }
            clinicExists.phone = phone;
            clinicExists.address_id = address_id;
            yield repo.save(clinicExists);
            return clinicExists;
        });
    }
}
exports.UpdateClinicService = UpdateClinicService;
//# sourceMappingURL=UpdateClinicService.js.map