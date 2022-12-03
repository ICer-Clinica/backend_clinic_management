"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySuperadminPermissions = void 0;
var verifySuperadminPermissions = function (req) {
    var userRole = req.userRole;
    if (userRole !== 'superadmin') {
        return false;
    }
    return true;
};
exports.verifySuperadminPermissions = verifySuperadminPermissions;
//# sourceMappingURL=index.js.map