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
exports.ListOneClinicService = void 0;
const typeorm_1 = require("typeorm");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
class ListOneClinicService {
    execute({ param }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            try {
                const clinic = yield repo.findOne({
                    where: { id: param },
                    relations: ['address'],
                });
                if (!clinic) {
                    return new Error('Clinic does not exists!');
                }
                return clinic;
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
}
exports.ListOneClinicService = ListOneClinicService;
//# sourceMappingURL=ListOneClinicService.js.map