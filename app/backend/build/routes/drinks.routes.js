"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinksController_1 = require("../controllers/DrinksController");
const drinkController = new DrinksController_1.default();
const drinksRouter = (0, express_1.Router)();
drinksRouter.get('/name', (req, res) => drinkController.getAllDrinks(req, res));
drinksRouter.get('/letter', (req, res) => drinkController.getDrinksByFirstLetter(req, res));
drinksRouter.get('/category', (req, res) => drinkController.getDrinkByCategory(req, res));
drinksRouter.get('/categories', (req, res) => drinkController.getAllCategories(req, res));
drinksRouter.get('/random', (req, res) => drinkController.getRandomDrink(req, res));
drinksRouter.get('/ingredients', (req, res) => drinkController.getAllIngredients(req, res));
drinksRouter.get('/ingredient', (req, res) => drinkController.getByIngredient(req, res));
drinksRouter.get('/:id', (req, res) => drinkController.getById(req, res));
exports.default = drinksRouter;
//# sourceMappingURL=drinks.routes.js.map