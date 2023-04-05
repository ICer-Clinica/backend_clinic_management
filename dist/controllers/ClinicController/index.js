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
exports.ClinicController = void 0;
const CreateClinicService_1 = require("../../services/ClinicServices/CreateClinicService");
const DeleteClinic_1 = require("../../services/ClinicServices/DeleteClinic");
const ListAllClinicService_1 = require("../../services/ClinicServices/ListAllClinicService");
const ListOneClinicService_1 = require("../../services/ClinicServices/ListOneClinicService");
const UpdateClinicService_1 = require("../../services/ClinicServices/UpdateClinicService");
class ClinicController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, address_id } = req.body;
            const service = new CreateClinicService_1.CreateClinicService();
            const result = yield service.execute({
                name,
                address_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { param } = req.params;
            const service = new ListOneClinicService_1.ListOneClinicService();
            const result = yield service.execute({
                param,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new ListAllClinicService_1.ListAllClinicsService();
            const result = yield service.execute();
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req.params;
            const service = new DeleteClinic_1.DeleteClinicService();
            const result = yield service.execute({ query });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, address_id } = req.body;
            const { clinic_id } = req.params;
            const service = new UpdateClinicService_1.UpdateClinicService();
            const result = yield service.execute({
                clinic_id,
                name,
                address_id,
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.ClinicController = ClinicController;
//# sourceMappingURL=index.js.map