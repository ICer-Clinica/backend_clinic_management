"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function AuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json('Token not provided!');
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, 'secret');
        const { id, role } = data;
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