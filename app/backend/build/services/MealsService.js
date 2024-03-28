"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealsModel_1 = require("../models/MealsModel");
class MealsService {
    constructor(mealsModel = new MealsModel_1.default()) {
        this.mealsModel = mealsModel;
    }
    async getAllMealsRecipe() {
        const recipes = await this.mealsModel.findAll();
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getRecipeByName(name) {
        const recipes = await this.mealsModel.findByName(name);
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getByFirstLetter(letter) {
        const recipes = await this.mealsModel.findByFirstLetter(letter);
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getRandomRecipe() {
        const recipes = await this.mealsModel.findAll();
        const randomRecipe = recipes[Math.floor(Math.random() * recipes.length) + 1];
        return { status: 'SUCCESSFUL', data: randomRecipe };
    }
    async getAllCategories() {
        const categories = await this.mealsModel.findAllCategories();
        return { status: 'SUCCESSFUL', data: categories };
    }
    async getAllAreas() {
        const areas = await this.mealsModel.findAllAreas();
        return { status: 'SUCCESSFUL', data: areas };
    }
    async getByCategory(category) {
        const recipes = await this.mealsModel.findRecipeByCategory(category);
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getByArea(area) {
        const recipes = await this.mealsModel.findRecipeByArea(area);
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getAllIngredients() {
        const ingredients = await this.mealsModel.findAllIngredients();
        return { status: 'SUCCESSFUL', data: { ingredients } };
    }
    async getByIngredient(ingredient) {
        const recipes = await this.mealsModel.findByIngredient(ingredient);
        if (!ingredient) {
            return {
                status: 'INVALID_DATA',
                data: { message: 'Must provide a ingredient' },
            };
        }
        return { status: 'SUCCESSFUL', data: recipes };
    }
    async getRecipeById(id) {
        const recipe = await this.mealsModel.findRecipeById(id);
        if (!recipe) {
            return { status: 'NOT_FOUND', data: { message: 'Food not found' } };
        }
        return { status: 'SUCCESSFUL', data: recipe };
    }
    async addRecipeInProgress(recipeInProgress) {
        const { userId, mealId } = recipeInProgress;
        if (!userId) {
            return {
                status: 'INVALID_DATA',
                data: { message: 'Must provide a userId' },
            };
        }
        if (!mealId) {
            return {
                status: 'INVALID_DATA',
                data: { message: 'Must provide a mealId' },
            };
        }
        // IF NEEDS TO CHECK IF RECIPE IS ALREADY IN PROGRESS, INVOKE 'findRecipeInProgressById' HERE:   
        const recipe = await this.mealsModel.addMealInProgress(recipeInProgress);
        return { status: 'SUCCESSFUL', data: recipe };
    }
    async findRecipeInProgressById(recipeInProgress) {
        const { userId, mealId } = recipeInProgress;
        if (!userId) {
            return {
                status: 'INVALID_DATA',
                data: { message: 'Must provide a userId' },
            };
        }
        if (!mealId) {
            return {
                status: 'INVALID_DATA',
                data: { message: 'Must provide a mealId' },
            };
        }
        const inProgress = await this.mealsModel.findMealInProgress({
            userId,
            mealId,
        });
        if (!inProgress) {
            return { status: 'NOT_FOUND', data: { message: 'Recipe not found!' } };
        }
        ;
        return { status: 'SUCCESSFUL', data: inProgress };
    }
    async updateRecipeInProgressById(inProgress) {
        const response = await this.mealsModel.updateMarkedIngredients(inProgress);
        if (response !== 1) {
            return { status: 'NOT_FOUND', data: { message: 'Recipe not found' } };
        }
        ;
        return { status: 'SUCCESSFUL', data: { message: `Marked ingredients updated!` } };
    }
    async favoriteMealRecipe(userId, id) {
        const favorite = await this.mealsModel.createFavoriteMeals(userId, id);
        if (favorite) {
            return { status: 'SUCCESSFUL', data: { message: 'Recipe stored in favorites' } };
        }
        return { status: 'SUCCESSFUL', data: { message: 'Recipe removed from favorites' } };
    }
    async getFavoriteRecipes(userId) {
        const favoriteRecipes = await this.mealsModel.getFavoriteRecipes(userId);
        if (favoriteRecipes.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'No favorite recipes stored!' } };
        }
        return { status: 'SUCCESSFUL', data: favoriteRecipes };
    }
    async addDoneMeal(userId, mealId) {
        await this.mealsModel.createDoneMeals(userId, mealId);
        return { status: 'SUCCESSFUL', data: { message: 'Recipe is done!' } };
    }
    async getDoneRecipes(userId) {
        const doneRecipes = await this.mealsModel.getDoneRecipes(userId);
        if (doneRecipes.length === 0) {
            return { status: 'NOT_FOUND', data: { message: 'No done recipes stored!' } };
        }
        return { status: 'SUCCESSFUL', data: doneRecipes };
    }
}
exports.default = MealsService;
//# sourceMappingURL=MealsService.js.map