"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drink_controller_1 = require("../controllers/drink.controller");
const drinkController = new drink_controller_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => drinkController.getDrinks(req, res));
router.get('/name', (req, res) => drinkController.getFilteredDrinks(req, res));
router.get('/letter', (req, res) => drinkController.getDrinksByFirstLetter(req, res));
router.get('/category', (req, res) => drinkController.getDrinkByCategory(req, res));
router.get('/random', (req, res) => drinkController.getRandomDrink(req, res));
router.get('/ingredients', (req, res) => drinkController.getAllIngredients(req, res));
exports.default = router;
//# sourceMappingURL=drinks.routes.js.map