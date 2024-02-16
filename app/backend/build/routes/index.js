"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
<<<<<<< HEAD
const meals_routes_1 = require("./meals.routes");
const router = (0, express_1.Router)();
router.use('/meals', meals_routes_1.default);
=======
const drinks_routes_1 = require("./drinks.routes");
const router = (0, express_1.Router)();
router.use('/drinks', drinks_routes_1.default);
>>>>>>> fd948c6a29a01b5116b0acd7b93de73ca903ad73
exports.default = router;
//# sourceMappingURL=index.js.map