"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drinks_routes_1 = require("./drinks.routes");
const meals_routes_1 = require("./meals.routes");
const user_routes_1 = require("./user.routes");
<<<<<<< HEAD
const profile_routes_1 = require("./profile.routes");
=======
>>>>>>> f41362d0826f8aa44b4d6929fed5e91411a6bc72
const router = (0, express_1.Router)();
router.use('/user', user_routes_1.default);
router.use('/drinks', drinks_routes_1.default);
router.use('/meals', meals_routes_1.default);
<<<<<<< HEAD
router.use('/profile', profile_routes_1.default);
=======
>>>>>>> f41362d0826f8aa44b4d6929fed5e91411a6bc72
exports.default = router;
//# sourceMappingURL=index.js.map