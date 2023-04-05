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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateService = void 0;
const typeorm_1 = require("typeorm");
const SuperadminEntitie_1 = require("../../entities/SuperadminEntitie");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ClinicAdministratorEntitie_1 = require("../../entities/ClinicAdministratorEntitie");
const CoordinatorEntitie_1 = require("../../entities/CoordinatorEntitie");
const AdministrativeSecretaryEntitie_1 = require("../../entities/AdministrativeSecretaryEntitie");
const HealthSecretaryEntitie_1 = require("../../entities/HealthSecretaryEntitie");
const TherapistEntitie_1 = require("../../entities/TherapistEntitie");
class AuthenticateService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const superadminRepo = (0, typeorm_1.getRepository)(SuperadminEntitie_1.Superadmin);
            const clinicAdmRepo = (0, typeorm_1.getRepository)(ClinicAdministratorEntitie_1.ClinicAdministrator);
            const coordinatorRepo = (0, typeorm_1.getRepository)(CoordinatorEntitie_1.Coordinator);
            const admSecretaryRepo = (0, typeorm_1.getRepository)(AdministrativeSecretaryEntitie_1.AdministrativeSecretary);
            const healthSecretaryRepo = (0, typeorm_1.getRepository)(HealthSecretaryEntitie_1.HealthSecretary);
            const therapistRepo = (0, typeorm_1.getRepository)(TherapistEntitie_1.Therapists);
            try {
                let user = {};
                const isSuperadmin = yield superadminRepo.findOne({ where: { email } });
                const isClinicAdm = yield clinicAdmRepo.findOne({ where: { email } });
                const isCoordinator = yield coordinatorRepo.findOne({ where: { email } });
                const isAdmSecretary = yield admSecretaryRepo.findOne({ where: { email } });
                const isHealthSecretary = yield healthSecretaryRepo.findOne({ where: { email } });
                const isTherapist = yield therapistRepo.findOne({ where: { email } });
                if (isSuperadmin) {
                    user = isSuperadmin;
                }
                else if (isClinicAdm) {
                    user = isClinicAdm;
                }
                else if (isCoordinator) {
                    user = isCoordinator;
                }
                else if (isAdmSecretary) {
                    user = isAdmSecretary;
                }
                else if (isHealthSecretary) {
                    user = isHealthSecretary;
                }
                else if (isTherapist) {
                    user = isTherapist;
                }
                const isValidPassword = yield bcryptjs_1.default.compare(password, user.password);
                if (!isValidPassword) {
                    return new Error('Password does not match!');
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, 'secret', {
                    expiresIn: '1d',
                });
                user === null || user === void 0 ? true : delete user.password;
                return { user, token };
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
}
exports.AuthenticateService = AuthenticateService;
//# sourceMappingURL=Authenticate.js.map