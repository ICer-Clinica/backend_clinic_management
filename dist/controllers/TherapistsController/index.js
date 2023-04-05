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
exports.TherapistsController = void 0;
const TherapistEntitie_1 = require("../../entities/TherapistEntitie");
const CreateTherapistService_1 = require("../../services/TherapistServices/CreateTherapistService");
const DeleteTherapistService_1 = require("../../services/TherapistServices/DeleteTherapistService");
const ListAllByClinicTherapistsService_1 = require("../../services/TherapistServices/ListAllByClinicTherapistsService");
const UpdateTherapistService_1 = require("../../services/TherapistServices/UpdateTherapistService");
class TherapistsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, clinic_id, office, cns } = req.body;
            const service = new CreateTherapistService_1.CreateTherapistService();
            if (office !== TherapistEntitie_1.TherapistRole.OCCUPATIONAL_THERAPY && office !== TherapistEntitie_1.TherapistRole.PHYSIOTHERAPY && office !== TherapistEntitie_1.TherapistRole.PSYCHOLOGY && office !== TherapistEntitie_1.TherapistRole.PHONOAUDIOLOGY) {
                return new Error('Invalid office');
            }
            const result = yield service.execute({
                name,
                email,
                role: 'therapist',
                office,
                cns,
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
            const service = new ListAllByClinicTherapistsService_1.ListAllByClinicTherapistsService();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { therapist_id } = req.params;
            const service = new DeleteTherapistService_1.DeleteTherapistService();
            const result = yield service.execute({ therapist_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role, clinic_id, office, cns } = req.body;
            const { therapist_id } = req.params;
            const service = new UpdateTherapistService_1.UpdateTherapistService();
            if (office !== TherapistEntitie_1.TherapistRole.OCCUPATIONAL_THERAPY && office !== TherapistEntitie_1.TherapistRole.PHYSIOTHERAPY && office !== TherapistEntitie_1.TherapistRole.PSYCHOLOGY && office !== TherapistEntitie_1.TherapistRole.PHONOAUDIOLOGY) {
                return new Error('Invalid office');
            }
            const result = yield service.execute({
                therapist_id,
                name,
                email,
                password,
                role,
                office,
                cns,
                clinic_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.TherapistsController = TherapistsController;
//# sourceMappingURL=index.js.map