"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DrinksController_1 = require("../controllers/DrinksController");
const auth_middlware_1 = require("../middlewares/auth.middlware");
const drinkController = new DrinksController_1.default();
const drinksRouter = (0, express_1.Router)();
drinksRouter.get('/name', auth_middlware_1.default.auth, (req, res) => drinkController.getAllDrinks(req, res));
drinksRouter.get('/letter', auth_middlware_1.default.auth, (req, res) => drinkController.getDrinksByFirstLetter(req, res));
drinksRouter.get('/category', auth_middlware_1.default.auth, (req, res) => drinkController.getDrinkByCategory(req, res));
drinksRouter.get('/categories', auth_middlware_1.default.auth, (req, res) => drinkController.getAllCategories(req, res));
drinksRouter.get('/random', auth_middlware_1.default.auth, (req, res) => drinkController.getRandomDrink(req, res));
drinksRouter.get('/ingredients', auth_middlware_1.default.auth, (req, res) => drinkController.getAllIngredients(req, res));
drinksRouter.get('/ingredient', auth_middlware_1.default.auth, (req, res) => drinkController.getByIngredient(req, res));
drinksRouter.get('/:id', auth_middlware_1.default.auth, (req, res) => drinkController.getById(req, res));
drinksRouter.post('/inprogress', auth_middlware_1.default.auth, (req, res) => drinkController.addDrinkInProgress(req, res));
drinksRouter.get('/inprogress/:id', auth_middlware_1.default.auth, (req, res) => drinkController.findRecipeInProgressById(req, res));
drinksRouter.patch('/inprogress/:id', auth_middlware_1.default.auth, (req, res) => drinkController.updateRecipeInProgressById(req, res));
// drinksRouter.get(
//   '/favorites',
//   (req: Request, res: Response) => drinkController.getFavoriteRecipes(req, res)
// );
// drinksRouter.post(
//   '/favorites/:id',
//   Authorization.auth,
//   (req: Request, res: Response) => drinkController.favoriteDrinkRecipe(req, res)
// );
exports.default = drinksRouter;
//# sourceMappingURL=drinks.routes.js.map