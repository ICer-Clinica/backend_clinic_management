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
exports.CreateHealthSecretaryService = void 0;
const typeorm_1 = require("typeorm");
const HealthSecretaryEntitie_1 = require("../../entities/HealthSecretaryEntitie");
const SendEmailMiddleware_1 = __importDefault(require("../../middlewares/SendEmailMiddleware"));
class CreateHealthSecretaryService {
    execute({ name, email, role }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(HealthSecretaryEntitie_1.HealthSecretary);
            const healthSecretaryExists = yield repo.findOne({ where: { email } });
            if (healthSecretaryExists) {
                return new Error('Health Secretary already exists!');
            }
            const min = Number(process.env.LOWER_NUMBER_PASSWORD);
            const max = Number(process.env.MAY_NUMBER_PASSWORD);
            const password = Math.floor(Math.random() * (max - min) + min);
            try {
                yield (0, SendEmailMiddleware_1.default)(password === null || password === void 0 ? void 0 : password.toString(), email);
                const healthSecretary = repo.create({
                    name,
                    email,
                    password: password === null || password === void 0 ? void 0 : password.toString(),
                    role,
                });
                yield repo.save(healthSecretary);
                return healthSecretary;
            }
            catch (error) {
                return new Error(`Error: ${error}`);
            }
        });
    }
}
exports.CreateHealthSecretaryService = CreateHealthSecretaryService;
//# sourceMappingURL=CreateHealthSecretaryService.js.map