"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySuperadminPermissions = void 0;
const verifySuperadminPermissions = (req) => {
    const { userRole } = req;
    if (userRole !== 'superadmin') {
        return false;
    }
    return true;
};
exports.verifySuperadminPermissions = verifySuperadminPermissions;
//# sourceMappingURL=index.js.map