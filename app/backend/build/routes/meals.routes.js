"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MealsController_1 = require("../controllers/MealsController");
const auth_middlware_1 = require("../middlewares/auth.middlware");
const mealsRouter = (0, express_1.Router)();
const mealsController = new MealsController_1.default();
mealsRouter.get('/name', auth_middlware_1.default.auth, (req, res) => mealsController.getAllMealsRecipe(req, res));
mealsRouter.get('/letter', auth_middlware_1.default.auth, (req, res) => mealsController.getByFirstLetter(req, res));
mealsRouter.get('/random', auth_middlware_1.default.auth, (req, res) => mealsController.getRandomRecipe(req, res));
mealsRouter.get('/categories', auth_middlware_1.default.auth, (req, res) => mealsController.getAllCategories(req, res));
mealsRouter.get('/areas', auth_middlware_1.default.auth, (req, res) => mealsController.getAllAreas(req, res));
mealsRouter.get('/category', auth_middlware_1.default.auth, (req, res) => mealsController.getRecipeByCategory(req, res));
mealsRouter.get('/area', auth_middlware_1.default.auth, (req, res) => mealsController.getRecipeByArea(req, res));
mealsRouter.get('/ingredients', auth_middlware_1.default.auth, (req, res) => mealsController.getAllIngredients(req, res));
mealsRouter.get('/ingredient', auth_middlware_1.default.auth, (req, res) => mealsController.getByIngredient(req, res)); // nao usa
mealsRouter.get('/:id', auth_middlware_1.default.auth, (req, res) => mealsController.getById(req, res));
mealsRouter.post('/inprogress', auth_middlware_1.default.auth, (req, res) => mealsController.addRecipeInProgress(req, res));
mealsRouter.get('/inprogress/:id', auth_middlware_1.default.auth, (req, res) => mealsController.findRecipeInProgressById(req, res));
mealsRouter.patch('/inprogress/:id', auth_middlware_1.default.auth, (req, res) => mealsController.updateRecipeInProgressById(req, res));
mealsRouter.get('/favorites/search', auth_middlware_1.default.auth, (req, res) => mealsController.getFavoriteRecipes(req, res));
mealsRouter.post('/favorites/:id', auth_middlware_1.default.auth, (req, res) => mealsController.favoriteMealRecipe(req, res));
mealsRouter.get('/donerecipes/search', auth_middlware_1.default.auth, (req, res) => mealsController.getDoneRecipes(req, res));
mealsRouter.post('/donerecipes/:id', auth_middlware_1.default.auth, (req, res) => mealsController.addDoneMeal(req, res));
exports.default = mealsRouter;
//# sourceMappingURL=meals.routes.js.map