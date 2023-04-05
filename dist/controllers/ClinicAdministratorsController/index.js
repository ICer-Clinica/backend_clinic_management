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
exports.ClinicAdministratorsController = void 0;
const CreateClinicAdministrator_1 = require("../../services/ClinicAdministratorServices/CreateClinicAdministrator");
const DeleteClinicAdmService_1 = require("../../services/ClinicAdministratorServices/DeleteClinicAdmService");
const ListOneClinicAdministratorService_1 = require("../../services/ClinicAdministratorServices/ListOneClinicAdministratorService");
const ListAllByClinicClinicAdministratorService_1 = require("../../services/ClinicAdministratorServices/ListAllByClinicClinicAdministratorService");
const ListAllClinicAdministrators_1 = require("../../services/ClinicAdministratorServices/ListAllClinicAdministrators");
const UpdateClinicAdministratorService_copy_1 = require("../../services/ClinicAdministratorServices/UpdateClinicAdministratorService copy");
class ClinicAdministratorsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, clinic_id } = req.body;
            const service = new CreateClinicAdministrator_1.CreateClinicAdministratorService();
            const result = yield service.execute({
                name,
                email,
                // password,
                role: 'clinicAdm',
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
            const service = new ListAllClinicAdministrators_1.ListAllClinicAdministratorsService();
            const result = yield service.execute();
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { param } = req.params;
            const service = new ListOneClinicAdministratorService_1.ListOneClinicAdministratorService();
            const result = yield service.execute({
                param,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listAllByClinicID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clinic_id } = req.params;
            const { userId } = req;
            const service = new ListAllByClinicClinicAdministratorService_1.ListAllByClinicClinicAdministratorService();
            const result = yield service.execute({
                clinic_id,
                user_id: userId,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clinicAdm_id } = req.params;
            const service = new DeleteClinicAdmService_1.DeleteClinicAdmService();
            const result = service.execute({
                clinicAdm_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role, clinic_id } = req.body;
            const { clinicAdministrator_id } = req.params;
            const service = new UpdateClinicAdministratorService_copy_1.UpdateClinicAdministratorService();
            const result = yield service.execute({
                clinicAdministrator_id,
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
exports.ClinicAdministratorsController = ClinicAdministratorsController;
//# sourceMappingURL=index.js.map