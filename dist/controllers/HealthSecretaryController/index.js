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
exports.HealthSecretaryController = void 0;
const CreateHealthSecretaryService_1 = require("../../services/HealthSecretariesServices/CreateHealthSecretaryService");
const DeleteHealthSecretaryService_1 = require("../../services/HealthSecretariesServices/DeleteHealthSecretaryService");
const ListAll_1 = require("../../services/HealthSecretariesServices/ListAll");
const ListAllByClinicHealthSecretaries_1 = require("../../services/HealthSecretariesServices/ListAllByClinicHealthSecretaries");
const UpdateHealthSecretaryService_1 = require("../../services/HealthSecretariesServices/UpdateHealthSecretaryService");
const utils_1 = require("../../utils");
class HealthSecretaryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = req.body;
            if (!(0, utils_1.verifySuperadminPermissions)(req)) {
                return res.status(401).json('User not authorized!');
            }
            const service = new CreateHealthSecretaryService_1.CreateHealthSecretaryService();
            const result = yield service.execute({
                name,
                email,
                role: 'healthSecretary',
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clinic_id } = req.params;
            const service = new ListAllByClinicHealthSecretaries_1.ListAllByClinicHealthSecretariesService();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req.params;
            const service = new DeleteHealthSecretaryService_1.DeleteHealthSecretaryService();
            const result = yield service.execute({ query });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role } = req.body;
            const { healthSecretary_id } = req.params;
            const service = new UpdateHealthSecretaryService_1.UpdateHealthSecretaryService();
            const result = yield service.execute({
                healthSecretary_id,
                name,
                email,
                password,
                role,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new ListAll_1.ListAllHealthSecretariesService();
            const result = yield service.execute();
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.HealthSecretaryController = HealthSecretaryController;
//# sourceMappingURL=index.js.map