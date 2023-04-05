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
exports.CreateClinicService = void 0;
const typeorm_1 = require("typeorm");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
class CreateClinicService {
    execute({ name, address_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            const clinicExists = yield repo.findOne({
                where: { name },
                relations: ['address'],
            });
            if (clinicExists) {
                return new Error('Clinic already exists!');
            }
            const clinic = repo.create({
                name,
                address_id,
            });
            yield repo.save(clinic);
            return clinic;
        });
    }
}
exports.CreateClinicService = CreateClinicService;
//# sourceMappingURL=CreateClinicService.js.map