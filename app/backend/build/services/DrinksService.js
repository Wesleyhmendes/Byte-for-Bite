"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drinks_model_1 = require("../models/Drinks.model");
class MatchesService {
    constructor(drinkModel = new Drinks_model_1.default()) {
        this.drinkModel = drinkModel;
    }
    async getDrinks() {
        const drinks = await this.drinkModel.findAll();
        if (drinks === null) {
            return { status: 'NOT_FOUND', data: { message: 'drinks not found' } };
        }
        ;
        return { status: 'SUCCESSFUL', data: drinks };
    }
    async getById(id) {
        const recipe = await this.drinkModel.getDrinkById(id);
        if (!recipe) {
            return { status: 'NOT_FOUND', data: { message: 'drinks not found' } };
        }
        return { status: 'SUCCESSFUL', data: recipe };
    }
    async getDrinkByName(q) {
        const drinks = await this.drinkModel.getFilteredDrinks(q);
        if (drinks === null) {
            return { status: 'NOT_FOUND', data: { message: 'drink not found' } };
        }
        ;
        return { status: 'SUCCESSFUL', data: drinks };
    }
    async getDrinksByFirstLetter(q) {
        const drinks = await this.drinkModel.getFilteredDrinks(q);
        if (drinks === null) {
            return { status: 'NOT_FOUND', data: { message: 'drink not found' } };
        }
        ;
        const response = drinks.filter((drink) => drink.strDrink.startsWith(q)
            || drink.strDrink.startsWith(q.toUpperCase()));
        return { status: 'SUCCESSFUL', data: response };
    }
    async getDrinkByCategory(q) {
        const drinks = await this.drinkModel.getDrinkByCategory(q);
        return { status: 'SUCCESSFUL', data: drinks };
    }
    async getAllCategories() {
        const categories = await this.drinkModel.getCategories();
        return { status: 'SUCCESSFUL', data: categories };
    }
    async getRandomDrink() {
        const recipes = await this.drinkModel.findAll();
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length) + 1];
        return { status: 'SUCCESSFUL', data: randomRecipe };
    }
    async getAllIngredients() {
        const recipes = await this.drinkModel.getAllIngredients();
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getByIngredients(q) {
        const recipes = await this.drinkModel.getByIngredients(q);
        return { status: 'SUCCESSFUL', data: recipes };
    }
}
exports.default = MatchesService;
//# sourceMappingURL=DrinksService.js.map