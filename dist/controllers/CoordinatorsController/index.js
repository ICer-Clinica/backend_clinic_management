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
exports.CoordinatorController = void 0;
const CreateCoordinatorService_1 = require("../../services/CoordinatorsServices/CreateCoordinatorService");
const DeleteCoordinatorService_1 = require("../../services/CoordinatorsServices/DeleteCoordinatorService");
const ListAllCoordinatorService_1 = require("../../services/CoordinatorsServices/ListAllCoordinatorService");
const UpdateCoordinatorService_1 = require("../../services/CoordinatorsServices/UpdateCoordinatorService");
class CoordinatorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, clinic_id } = req.body;
            const service = new CreateCoordinatorService_1.CreateCoordinatorService();
            const result = yield service.execute({
                name,
                email,
                role: 'coordinator',
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
            const service = new ListAllCoordinatorService_1.ListAllCoordinatorsService();
            const result = yield service.execute({ clinic_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { coordinator_id } = req.params;
            const service = new DeleteCoordinatorService_1.DeleteCoordinatorService();
            const result = yield service.execute({ coordinator_id });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, role, clinic_id } = req.body;
            const { coordinator_id } = req.params;
            const service = new UpdateCoordinatorService_1.UpdateCoordinatorService();
            const result = yield service.execute({
                coordinator_id,
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
exports.CoordinatorController = CoordinatorController;
//# sourceMappingURL=index.js.map