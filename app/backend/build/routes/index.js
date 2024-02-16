"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drinks_routes_1 = require("./drinks.routes");
const router = (0, express_1.Router)();
router.use('/drinks', drinks_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map