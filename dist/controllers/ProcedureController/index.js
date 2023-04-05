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
exports.ProcedureController = void 0;
const ProcedureEntitie_1 = require("../../entities/ProcedureEntitie");
const CreateProcedureService_1 = require("../../services/ProceduresServices/CreateProcedureService");
const DeleteProcedureService_1 = require("../../services/ProceduresServices/DeleteProcedureService");
const ListAllProcedureByClinicService_1 = require("../../services/ProceduresServices/ListAllProcedureByClinicService");
const UpdateProcedureService_1 = require("../../services/ProceduresServices/UpdateProcedureService");
class ProcedureController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, name, clinic_id, area } = req.body;
            const service = new CreateProcedureService_1.CreateProceduresService();
            if (area !== ProcedureEntitie_1.ProcedureArea.OCCUPATIONAL_THERAPY && area !== ProcedureEntitie_1.ProcedureArea.PHYSIOTHERAPY && area !== ProcedureEntitie_1.ProcedureArea.PSYCHOLOGY && area !== ProcedureEntitie_1.ProcedureArea.PHONOAUDIOLOGY) {
                return new Error('Invalid area');
            }
            const result = yield service.execute({
                code,
                name,
                clinic_id,
                area
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    createMultiple(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new CreateProcedureService_1.CreateProceduresService();
            const result = yield service.createProcedures({
                procedure: req.body
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
            const service = new ListAllProcedureByClinicService_1.ListAllByClinicProcedureService();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listByTherapist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { therapist_id } = req.params;
            const service = new ListAllProcedureByClinicService_1.ListAllByClinicProcedureService();
            const result = yield service.listByTherapist({ therapist_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { procedure_id } = req.params;
            const service = new DeleteProcedureService_1.DeleteProceduresService();
            const result = yield service.execute({ procedure_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, name, clinic_id, area } = req.body;
            const { procedure_id } = req.params;
            const service = new UpdateProcedureService_1.UpdateProcedureService();
            if (area !== ProcedureEntitie_1.ProcedureArea.OCCUPATIONAL_THERAPY && area !== ProcedureEntitie_1.ProcedureArea.PHYSIOTHERAPY && area !== ProcedureEntitie_1.ProcedureArea.PSYCHOLOGY && area !== ProcedureEntitie_1.ProcedureArea.PHONOAUDIOLOGY) {
                return new Error('Invalid area');
            }
            const result = yield service.execute({
                procedure_id,
                code,
                name,
                clinic_id,
                area
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.ProcedureController = ProcedureController;
//# sourceMappingURL=index.js.map