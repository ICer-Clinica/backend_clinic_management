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
exports.SuperadminController = void 0;
var CreateSuperadminService_1 = require("../../services/SuperadminServices/CreateSuperadminService");
var DeleteSuperadmin_1 = require("../../services/SuperadminServices/DeleteSuperadmin");
var ListAllSuperadminsService_1 = require("../../services/SuperadminServices/ListAllSuperadminsService");
var ListOneSuperadmin_1 = require("../../services/SuperadminServices/ListOneSuperadmin");
var SuperadminController = /** @class */ (function () {
    function SuperadminController() {
    }
    SuperadminController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, service, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                        service = new CreateSuperadminService_1.CreateSuperadminService();
                        return [4 /*yield*/, service.execute({
                                name: name,
                                email: email,
                                password: password,
                                role: 'superadmin',
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
    SuperadminController.prototype.listAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new ListAllSuperadminsService_1.ListAllSuperadminsService();
                        return [4 /*yield*/, service.execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, res.json(result)];
                }
            });
        });
    };
    SuperadminController.prototype.listOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = req.params.query;
                        service = new ListOneSuperadmin_1.ListOneSuperadminService();
                        return [4 /*yield*/, service.execute({ query: query })];
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
    SuperadminController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = req.params.query;
                        service = new DeleteSuperadmin_1.DeleteSuperadminService();
                        return [4 /*yield*/, service.execute({ query: query })];
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
    return SuperadminController;
}());
exports.SuperadminController = SuperadminController;
//# sourceMappingURL=index.js.map