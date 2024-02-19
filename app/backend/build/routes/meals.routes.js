"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealsController_1 = require("../controllers/MealsController");
const mealsRouter = (0, express_1.Router)();
const mealsController = new MealsController_1.default();
mealsRouter.get('/name', (req, res) => mealsController.getAllMealsRecipe(req, res));
mealsRouter.get('/letter', (req, res) => mealsController.getByFirstLetter(req, res));
mealsRouter.get('/random', (req, res) => mealsController.getRandomRecipe(req, res));
mealsRouter.get('/categories', (req, res) => mealsController.getAllCategories(req, res));
mealsRouter.get('/areas', (req, res) => mealsController.getAllAreas(req, res));
mealsRouter.get('/category', (req, res) => mealsController.getRecipeByCategory(req, res));
mealsRouter.get('/area', (req, res) => mealsController.getRecipeByArea(req, res));
exports.default = mealsRouter;
//# sourceMappingURL=meals.routes.js.map