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
exports.AdministrativeSecretaryController = void 0;
const CreateAdministrativeSecretary_1 = require("../../services/AdministrativeSecretaryServices/CreateAdministrativeSecretary");
const DeleteAdministrativeSecretary_1 = require("../../services/AdministrativeSecretaryServices/DeleteAdministrativeSecretary");
const ListAllAdministrativeSecretaries_1 = require("../../services/AdministrativeSecretaryServices/ListAllAdministrativeSecretaries");
const UpdateAdministrativeSecretaryService_1 = require("../../services/AdministrativeSecretaryServices/UpdateAdministrativeSecretaryService");
class AdministrativeSecretaryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, clinic_id } = req.body;
            const service = new CreateAdministrativeSecretary_1.CreateAdministrativeSecretaryService();
            const result = yield service.execute({
                name,
                email,
                role: 'admnistrativeSecretary',
                clinic_id,
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
            const service = new ListAllAdministrativeSecretaries_1.ListAllAdministrativeSecretaries();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { admSecretary_id } = req.params;
            const service = new DeleteAdministrativeSecretary_1.DeleteAdministrativeSecretary();
            const result = yield service.execute({ admSecretary_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role, clinic_id } = req.body;
            const { administrativeSecretary_id } = req.params;
            const service = new UpdateAdministrativeSecretaryService_1.UpdateAdministrativeSecretaryService();
            const result = yield service.execute({
                administrativeSecretary_id,
                name,
                email,
                password,
                role,
                clinic_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.AdministrativeSecretaryController = AdministrativeSecretaryController;
//# sourceMappingURL=index.js.map