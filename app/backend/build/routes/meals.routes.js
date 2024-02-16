"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealsController_1 = require("../controllers/MealsController");
const mealsRouter = (0, express_1.Router)();
const mealsController = new MealsController_1.default();
mealsRouter.get('/name', (req, res) => mealsController.getAllMealsRecipe(req, res));
exports.default = mealsRouter;
//# sourceMappingURL=meals.routes.js.map