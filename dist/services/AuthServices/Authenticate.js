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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateService = void 0;
var typeorm_1 = require("typeorm");
var SuperadminEntitie_1 = require("../../entities/SuperadminEntitie");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var ClinicAdministrator_1 = require("../../entities/ClinicAdministrator");
var Coordinator_1 = require("../../entities/Coordinator");
var AdministrativeSecretary_1 = require("../../entities/AdministrativeSecretary");
var HealthSecretary_1 = require("../../entities/HealthSecretary");
var TherapistEntitie_1 = require("../../entities/TherapistEntitie");
var AuthenticateService = /** @class */ (function () {
    function AuthenticateService() {
    }
    AuthenticateService.prototype.execute = function (_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var superadminRepo, clinicAdmRepo, coordinatorRepo, admSecretaryRepo, healthSecretaryRepo, therapistRepo, user, isSuperadmin, isClinicAdm, isCoordinator, isAdmSecretary, isHealthSecretary, isTherapist, isValidPassword, token, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        superadminRepo = (0, typeorm_1.getRepository)(SuperadminEntitie_1.Superadmin);
                        clinicAdmRepo = (0, typeorm_1.getRepository)(ClinicAdministrator_1.ClinicAdministrator);
                        coordinatorRepo = (0, typeorm_1.getRepository)(Coordinator_1.Coordinator);
                        admSecretaryRepo = (0, typeorm_1.getRepository)(AdministrativeSecretary_1.AdministrativeSecretary);
                        healthSecretaryRepo = (0, typeorm_1.getRepository)(HealthSecretary_1.HealthSecretary);
                        therapistRepo = (0, typeorm_1.getRepository)(TherapistEntitie_1.Therapists);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, , 10]);
                        user = {};
                        return [4 /*yield*/, superadminRepo.findOne({ where: { email: email } })];
                    case 2:
                        isSuperadmin = _b.sent();
                        return [4 /*yield*/, clinicAdmRepo.findOne({ where: { email: email } })];
                    case 3:
                        isClinicAdm = _b.sent();
                        return [4 /*yield*/, coordinatorRepo.findOne({ where: { email: email } })];
                    case 4:
                        isCoordinator = _b.sent();
                        return [4 /*yield*/, admSecretaryRepo.findOne({ where: { email: email } })];
                    case 5:
                        isAdmSecretary = _b.sent();
                        return [4 /*yield*/, healthSecretaryRepo.findOne({ where: { email: email } })];
                    case 6:
                        isHealthSecretary = _b.sent();
                        return [4 /*yield*/, therapistRepo.findOne({ where: { email: email } })];
                    case 7:
                        isTherapist = _b.sent();
                        if (isSuperadmin) {
                            user = isSuperadmin;
                        }
                        else if (isClinicAdm) {
                            user = isClinicAdm;
                        }
                        else if (isCoordinator) {
                            user = isCoordinator;
                        }
                        else if (isAdmSecretary) {
                            user = isAdmSecretary;
                        }
                        else if (isHealthSecretary) {
                            user = isHealthSecretary;
                        }
                        else if (isTherapist) {
                            user = isTherapist;
                        }
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
                    case 8:
                        isValidPassword = _b.sent();
                        if (!isValidPassword) {
                            return [2 /*return*/, new Error('Password does not match!')];
                        }
                        token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, 'secret', {
                            expiresIn: '1d',
                        });
                        user === null || user === void 0 ? true : delete user.password;
                        return [2 /*return*/, { user: user, token: token }];
                    case 9:
                        error_1 = _b.sent();
                        return [2 /*return*/, new Error(error_1)];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return AuthenticateService;
}());
exports.AuthenticateService = AuthenticateService;
//# sourceMappingURL=Authenticate.js.map