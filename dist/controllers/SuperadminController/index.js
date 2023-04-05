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
exports.SuperadminController = void 0;
const CreateSuperadminService_1 = require("../../services/SuperadminServices/CreateSuperadminService");
const DeleteSuperadmin_1 = require("../../services/SuperadminServices/DeleteSuperadmin");
const ListAllSuperadminsService_1 = require("../../services/SuperadminServices/ListAllSuperadminsService");
const ListOneSuperadmin_1 = require("../../services/SuperadminServices/ListOneSuperadmin");
class SuperadminController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const service = new CreateSuperadminService_1.CreateSuperadminService();
            const result = yield service.execute({
                name,
                email,
                password,
                role: 'superadmin',
            });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new ListAllSuperadminsService_1.ListAllSuperadminsService();
            const result = yield service.execute();
            return res.json(result);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req.params;
            const service = new ListOneSuperadmin_1.ListOneSuperadminService();
            const result = yield service.execute({ query });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = req.params;
            const service = new DeleteSuperadmin_1.DeleteSuperadminService();
            const result = yield service.execute({ query });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.json(result);
        });
    }
}
exports.SuperadminController = SuperadminController;
//# sourceMappingURL=index.js.map