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
    async addDrinkInProgress(recipeInProgress) {
        const { userId, drinkId } = recipeInProgress;
        if (!userId) {
            return { status: 'INVALID_DATA', data: { message: 'Must provide a userId' } };
        }
        if (!drinkId) {
            return { status: 'INVALID_DATA', data: { message: 'Must provide a drinkId' } };
        }
        // IF NEEDS TO CHECK IF RECIPE IS ALREADY IN PROGRESS, INVOKE 'findRecipeInProgressById' HERE:    
        const recipe = await this.drinkModel.addDrinkInProgress(recipeInProgress);
        return { status: 'SUCCESSFUL', data: recipe };
    }
    async findRecipeInProgressById(recipeInProgress) {
        const { userId, drinkId } = recipeInProgress;
        if (!userId) {
            return { status: 'INVALID_DATA', data: { message: 'Must provide a userId' } };
        }
        ;
        if (!drinkId) {
            return { status: 'INVALID_DATA', data: { message: 'Must provide a mealId' } };
        }
        ;
        const inProgress = await this.drinkModel.findDrinkInProgress({
            userId,
            drinkId,
        });
        if (!inProgress) {
            return { status: 'NOT_FOUND', data: { message: 'Recipe not found!' } };
        }
        return { status: 'SUCCESSFUL', data: inProgress };
    }
    async updateRecipeInProgressById(inProgress) {
        const response = await this.drinkModel.updateMarkedIngredients(inProgress);
        if (response !== 1) {
            return { status: 'NOT_FOUND', data: { message: 'Recipe not found' } };
        }
        ;
        return { status: 'SUCCESSFUL', data: { message: `Marked ingredients updated!` } };
    }
    async favoriteDrinkRecipe(userId, id) {
        const favorite = await this.drinkModel.createFavoriteDrinks(userId, id);
        if (favorite) {
            return { status: 'SUCCESSFUL', data: { message: 'Recipe stored in favorites' } };
        }
        return { status: 'SUCCESSFUL', data: { message: 'Recipe removed from favorites' } };
    }
    async getFavoriteRecipes(userId) {
        const favoriteRecipes = await this.drinkModel.getFavoriteRecipes(userId);
        if (favoriteRecipes.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'No favorite drinks stored!' } };
        }
        return { status: 'SUCCESSFUL', data: favoriteRecipes };
    }
    async addDoneDrink(userId, id) {
        await this.drinkModel.createDoneDrinks(userId, id);
        return { status: 'SUCCESSFUL', data: { message: 'Drink recipe is done!' } };
    }
    async getDoneRecipes(userId) {
        const doneRecipes = await this.drinkModel.getDoneRecipes(userId);
        if (doneRecipes.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'No done drinks stored!' } };
        }
        return { status: 'SUCCESSFUL', data: doneRecipes };
    }
}
exports.default = MatchesService;
//# sourceMappingURL=DrinksService.js.map