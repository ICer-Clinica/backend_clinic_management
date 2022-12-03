"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)('default')
    .then(function () {
    console.log('✔️ [CONNECTED]: Default database connected successfully.');
})
    .catch(function (err) { return console.log("\u274C [ERROR]: Database error: ".concat(err)); });
//# sourceMappingURL=index.js.map