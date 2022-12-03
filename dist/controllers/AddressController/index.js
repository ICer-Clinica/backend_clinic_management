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
exports.AddressController = void 0;
var CreateAddressService_1 = require("../../services/AddressServices/CreateAddressService");
var DeleteAddressService_1 = require("../../services/AddressServices/DeleteAddressService");
var ListAllAdresses_1 = require("../../services/AddressServices/ListAllAdresses");
var ListOneAddress_1 = require("../../services/AddressServices/ListOneAddress");
var utils_1 = require("../../utils");
var AddressController = /** @class */ (function () {
    function AddressController() {
    }
    AddressController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, street, number, district, service, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, street = _a.street, number = _a.number, district = _a.district;
                        if (!(0, utils_1.verifySuperadminPermissions)(req)) {
                            return [2 /*return*/, res.status(401).json('User not authorized!')];
                        }
                        service = new CreateAddressService_1.CreateAddressService();
                        return [4 /*yield*/, service.execute({
                                street: street,
                                number: number,
                                district: district,
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
    AddressController.prototype.listOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var param, _a, street, number, service, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        param = req.params.param;
                        _a = req.body, street = _a.street, number = _a.number;
                        service = new ListOneAddress_1.ListOneAddressService();
                        return [4 /*yield*/, service.execute({
                                param: param,
                                street: street,
                                number: number,
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
    AddressController.prototype.listAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new ListAllAdresses_1.ListAllAdressesService();
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
    AddressController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, service, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = req.params.query;
                        service = new DeleteAddressService_1.DeleteAddressService();
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
    return AddressController;
}());
exports.AddressController = AddressController;
//# sourceMappingURL=index.js.map