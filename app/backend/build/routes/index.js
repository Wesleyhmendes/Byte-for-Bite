"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_routes_1 = require("./login.routes");
const router = (0, express_1.Router)();
router.use('/user', login_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map