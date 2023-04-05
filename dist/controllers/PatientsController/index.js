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
exports.PatientsController = void 0;
const CreatePatientService_1 = require("../../services/PatientsService/CreatePatientService");
const DeletePatientService_1 = require("../../services/PatientsService/DeletePatientService");
const ListAllByClinicPatientService_1 = require("../../services/PatientsService/ListAllByClinicPatientService");
const UpdatePatientService_1 = require("../../services/PatientsService/UpdatePatientService");
class PatientsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, phone, cpf, birth_date, sus_card, clinic_id } = req.body;
            const service = new CreatePatientService_1.CreatePatientService();
            const result = yield service.execute({
                name,
                phone,
                cpf,
                birth_date,
                sus_card,
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
            const service = new ListAllByClinicPatientService_1.ListAllPatientByClinicService();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { patient_id } = req.params;
            const service = new DeletePatientService_1.DeletePatientService();
            const result = yield service.execute({ patient_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, sus_card, phone, cpf, birth_date, clinic_id } = req.body;
            const { patient_id } = req.params;
            const service = new UpdatePatientService_1.UpdatePatientService();
            const result = yield service.execute({
                patient_id,
                name,
                sus_card,
                phone,
                cpf,
                birth_date,
                clinic_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.PatientsController = PatientsController;
//# sourceMappingURL=index.js.map