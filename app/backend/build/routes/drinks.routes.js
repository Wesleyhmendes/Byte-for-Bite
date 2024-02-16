"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drink_controller_1 = require("../controllers/drink.controller");
const drinkController = new drink_controller_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => drinkController.getDrinks(req, res));
exports.default = router;
//# sourceMappingURL=drinks.routes.js.map