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
exports.CreateSuperadminService = void 0;
const typeorm_1 = require("typeorm");
const SuperadminEntitie_1 = require("../../entities/SuperadminEntitie");
class CreateSuperadminService {
    execute({ name, email, password, role, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(SuperadminEntitie_1.Superadmin);
            const superadminExists = yield repo.findOne({ where: { email } });
            if (superadminExists) {
                return new Error('Superadmin already exists!');
            }
            const superadmin = repo.create({
                name,
                email,
                password,
                role,
            });
            yield repo.save(superadmin);
            return superadmin;
        });
    }
}
exports.CreateSuperadminService = CreateSuperadminService;
//# sourceMappingURL=CreateSuperadminService.js.map