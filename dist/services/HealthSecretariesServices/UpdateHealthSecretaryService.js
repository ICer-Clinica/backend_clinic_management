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
exports.UpdateHealthSecretaryService = void 0;
const typeorm_1 = require("typeorm");
const HealthSecretaryEntitie_1 = require("../../entities/HealthSecretaryEntitie");
class UpdateHealthSecretaryService {
    execute({ healthSecretary_id, name, email, password, role, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(HealthSecretaryEntitie_1.HealthSecretary);
            const healthSecretaryExists = yield repo.findOne({ where: { id: healthSecretary_id } });
            if (!healthSecretaryExists) {
                return new Error('Health Secretary does not exists!');
            }
            healthSecretaryExists.name = name;
            healthSecretaryExists.email = email;
            healthSecretaryExists.password = password;
            healthSecretaryExists.role = role;
            yield repo.save(healthSecretaryExists);
            return healthSecretaryExists;
        });
    }
}
exports.UpdateHealthSecretaryService = UpdateHealthSecretaryService;
//# sourceMappingURL=UpdateHealthSecretaryService.js.map