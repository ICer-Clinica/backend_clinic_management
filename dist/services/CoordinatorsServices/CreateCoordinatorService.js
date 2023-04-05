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
exports.CreateCoordinatorService = void 0;
const typeorm_1 = require("typeorm");
const ClinicEntitie_1 = require("../../entities/ClinicEntitie");
const CoordinatorEntitie_1 = require("../../entities/CoordinatorEntitie");
const SendEmailMiddleware_1 = __importDefault(require("../../middlewares/SendEmailMiddleware"));
class CreateCoordinatorService {
    execute({ name, email, role, clinic_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(CoordinatorEntitie_1.Coordinator);
            const repoClinic = (0, typeorm_1.getRepository)(ClinicEntitie_1.Clinic);
            const coordinatorExists = yield repo.findOne({ where: { email } });
            const clinicExists = yield repoClinic.findOne({ where: { id: clinic_id } });
            if (coordinatorExists) {
                return new Error('Coordinator already exists!');
            }
            if (!clinicExists) {
                return new Error('Clinic does not exists');
            }
            const min = Number(process.env.LOWER_NUMBER_PASSWORD);
            const max = Number(process.env.MAY_NUMBER_PASSWORD);
            const password = Math.floor(Math.random() * (max - min) + min);
            if (!password) {
                return new Error('Unable to generate a password');
            }
            try {
                yield (0, SendEmailMiddleware_1.default)(password === null || password === void 0 ? void 0 : password.toString(), email);
                const coordinator = repo.create({
                    name,
                    email,
                    password: password === null || password === void 0 ? void 0 : password.toString(),
                    role,
                    clinic_id,
                });
                yield repo.save(coordinator);
                return coordinator;
            }
            catch (error) {
                return new Error(`Error: ${error}`);
            }
        });
    }
}
exports.CreateCoordinatorService = CreateCoordinatorService;
//# sourceMappingURL=CreateCoordinatorService.js.map