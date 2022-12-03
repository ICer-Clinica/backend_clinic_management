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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicAdministratorsController = void 0;
var CreateClinicAdministrator_1 = require("../../services/ClinicAdministratorServices/CreateClinicAdministrator");
var DeleteClinicAdmService_1 = require("../../services/ClinicAdministratorServices/DeleteClinicAdmService");
var LisOneClinicAdministratorService_1 = require("../../services/ClinicAdministratorServices/LisOneClinicAdministratorService");
var ListAllByClinicClinicAdministratorService_1 = require("../../services/ClinicAdministratorServices/ListAllByClinicClinicAdministratorService");
var ListAllClinicAdministrators_1 = require("../../services/ClinicAdministratorServices/ListAllClinicAdministrators");
var ClinicAdministratorsController = /** @class */ (function () {
    function ClinicAdministratorsController() {
    }
    ClinicAdministratorsController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, clinic_id, service, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, clinic_id = _a.clinic_id;
                        service = new CreateClinicAdministrator_1.CreateClinicAdministratorService();
                        return [4 /*yield*/, service.execute({
                                name: name,
                                email: email,
                                password: password,
                                role: 'clinicAdm',
                                clinic_id: clinic_id,
                            })];
                    case 1:
                        result = _b.sent();
                        if (result instanceof Error) {
                            return [2 /*return*/, res.status(400).json(result.message)];
                        }
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    ClinicAdministratorsController.prototype.listAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new ListAllClinicAdministrators_1.ListAllClinicAdministratorsService();
                        return [4 /*yield*/, service.execute()];
                    case 1:
                        result = _a.sent();
                        if (result instanceof Error) {
                            return [2 /*return*/, res.status(400).json(result.message)];
                        }
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    ClinicAdministratorsController.prototype.listOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var param, service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param = req.params.param;
                        service = new LisOneClinicAdministratorService_1.ListOneClinicAdministratorService();
                        return [4 /*yield*/, service.execute({
                                param: param,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result instanceof Error) {
                            return [2 /*return*/, res.status(400).json(result.message)];
                        }
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    ClinicAdministratorsController.prototype.listAllByClinicID = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var clinic_id, userId, service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clinic_id = req.params.clinic_id;
                        userId = req.userId;
                        service = new ListAllByClinicClinicAdministratorService_1.ListAllByClinicClinicAdministratorService();
                        return [4 /*yield*/, service.execute({
                                clinic_id: clinic_id,
                                user_id: userId,
                            })];
                    case 1:
                        result = _a.sent();
                        if (result instanceof Error) {
                            return [2 /*return*/, res.status(400).json(result.message)];
                        }
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    ClinicAdministratorsController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var clinicAdm_id, service, result;
            return __generator(this, function (_a) {
                clinicAdm_id = req.params.clinicAdm_id;
                service = new DeleteClinicAdmService_1.DeleteClinicAdmService();
                result = service.execute({
                    clinicAdm_id: clinicAdm_id,
                });
                if (result instanceof Error) {
                    return [2 /*return*/, res.status(400).json(result.message)];
                }
                return [2 /*return*/, res.json(result)];
            });
        });
    };
    return ClinicAdministratorsController;
}());
exports.ClinicAdministratorsController = ClinicAdministratorsController;
//# sourceMappingURL=index.js.map