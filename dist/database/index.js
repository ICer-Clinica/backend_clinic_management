"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)('default')
    .then(() => {
    console.log('✔️ [CONNECTED]: Default database connected successfully.');
})
    .catch((err) => console.log(`❌ [ERROR]: Database error: ${err}`));
//# sourceMappingURL=index.js.map