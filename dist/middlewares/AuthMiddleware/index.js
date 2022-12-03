"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json('Token not provided!');
    }
    var token = authorization.replace('Bearer', '').trim();
    try {
        var data = jsonwebtoken_1.default.verify(token, 'secret');
        var _a = data, id = _a.id, role = _a.role;
        req.userId = id;
        req.userRole = role;
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
}
exports.default = AuthMiddleware;
//# sourceMappingURL=index.js.map