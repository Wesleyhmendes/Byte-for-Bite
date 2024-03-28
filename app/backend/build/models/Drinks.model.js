"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _03Drinks_Recipes_model_1 = require("../database/models/03Drinks-Recipes.model");
const _01Drinks_Categories_model_1 = require("../database/models/01Drinks-Categories.model");
const _01Drinks_Categories_model_2 = require("../database/models/01Drinks-Categories.model");
const _07In_Progress_Drinks_1 = require("../database/models/07In-Progress-Drinks");
const startRecipeInProgress_1 = require("../utils/startRecipeInProgress");
const _05Favorite_Drinks_1 = require("../database/models/05Favorite-Drinks");
const _09Finished_Drinks_1 = require("../database/models/09Finished-Drinks");
class DrinksModel {
    constructor() {
        this.Drinkmodel = _03Drinks_Recipes_model_1.default;
        this.inProgressModel = _07In_Progress_Drinks_1.default;
        this.CategoryModel = _01Drinks_Categories_model_1.default;
        this.FavoriteDrinksModel = _05Favorite_Drinks_1.default;
        this.DoneDrinksModel = _09Finished_Drinks_1.default;
    }
    async findAll() {
        const recipes = await this.Drinkmodel.findAll({
            include: [{
                    model: _01Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async getDrinkById(id) {
        const recipe = await this.Drinkmodel.findByPk(id);
        return recipe;
    }
    async getFilteredDrinks(q) {
        const dbResponse = await this.Drinkmodel.findAll({
            where: {
                strDrink: {
                    [sequelize_1.Op.like]: `%${q}%`
                }
            }
        });
        if (!dbResponse)
            return null;
        return dbResponse;
    }
    async getDrinkByCategory(q) {
        const recipes = await this.Drinkmodel.findAll({
            include: [{
                    model: _01Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        }).filter((recipe) => recipe.strCategory === q);
        return newRecipes;
    }
    async getCategories() {
        const categories = await this.CategoryModel.findAll();
        return categories;
    }
    async getAllIngredients() {
        const recipes = await this.findAll();
        const uniqueIngredients = [];
        recipes.forEach((recipe) => {
            for (let i = 1; i <= 20; i += 1) {
                const ingredientKey = `strIngredient${i}`;
                const ingredient = recipe[ingredientKey];
                if (ingredient) {
                    uniqueIngredients.push(ingredient);
                }
            }
        });
        const removedDup = new Set(uniqueIngredients);
        const newIngredients = Array.from(removedDup);
        return newIngredients;
    }
    async getByIngredients(q) {
        const recipes = await this.findAll();
        const recipesFiltred = recipes.filter((recipe) => {
            const values = Object.values(recipe);
            const valuesLower = values.map((value) => {
                return typeof value === 'string' ? value.toLowerCase() : value;
            });
            if (valuesLower.includes(q.toLowerCase())) {
                return true;
            }
            return false;
        });
        return recipesFiltred;
    }
    async addDrinkInProgress(recipeInProgress) {
        const defaultIngredients = (0, startRecipeInProgress_1.startDrinkRecipeInProgress)();
        const { dataValues } = await this.inProgressModel.create({ ...recipeInProgress, markedIngredients: defaultIngredients });
        return dataValues;
    }
    async findDrinkInProgress(recipeInProgress) {
        const { userId, drinkId } = recipeInProgress;
        const foundRecipe = await this.inProgressModel.findOne({
            where: {
                userId,
                drinkId,
            }
        });
        return foundRecipe;
    }
    async updateMarkedIngredients(recipeInProgress) {
        const { userId, drinkId, markedIngredients } = recipeInProgress;
        const rowCount = await this.inProgressModel.update({ markedIngredients }, {
            where: {
                userId,
                drinkId,
            }
        });
        if (rowCount[0] === 0)
            return null;
        return rowCount[0];
    }
    async createFavoriteDrinks(userId, drinkId) {
        const findFavorite = await this.findFavorite(userId, drinkId);
        if (!findFavorite) {
            const { dataValues } = await this.FavoriteDrinksModel.create({ userId, drinkId });
            return dataValues;
        }
        await this.FavoriteDrinksModel.destroy({ where: { userId, drinkId } });
    }
    async findFavorite(userId, drinkId) {
        const foundFavorite = await this.FavoriteDrinksModel.findOne({
            where: {
                userId,
                drinkId
            }
        });
        return foundFavorite;
    }
    async getFavoriteRecipes(userId) {
        const favorites = await this.FavoriteDrinksModel.findAll({
            where: { userId },
            include: [{
                    model: _03Drinks_Recipes_model_1.default,
                    as: 'favoriteRecipes',
                    attributes: ['idDrink', 'strDrink', 'strDrinkThumb', 'strAlcoholic']
                }],
            attributes: { exclude: ['drinkId'] },
        });
        // const mapped = favorites.map((obj) => obj.dataValues.favoriteRecipes)
        return favorites;
    }
    async findDone(userId, drinkId) {
        const foundDone = await this.DoneDrinksModel.findOne({
            where: {
                userId,
                drinkId
            }
        });
        return foundDone;
    }
    async createDoneDrinks(userId, drinkId) {
        const findDone = await this.findDone(userId, drinkId);
        if (!findDone) {
            await this.inProgressModel.destroy({ where: { userId, drinkId } });
            const { dataValues } = await this.DoneDrinksModel.create({
                userId,
                drinkId
            });
            return dataValues;
        }
        await this.inProgressModel.destroy({ where: { userId, drinkId } });
        return findDone;
    }
    async getDoneRecipes(userId) {
        const doneRecipes = await this.DoneDrinksModel.findAll({
            where: { userId },
            include: [{
                    model: _03Drinks_Recipes_model_1.default,
                    as: 'finishedRecipes',
                    attributes: ['idDrink', 'strDrink', 'strDrinkThumb', 'strAlcoholic']
                }],
            attributes: { exclude: ['drinkId'] },
        });
        // const mapped = favorites.map((obj) => obj.dataValues.favoriteRecipes)
        return doneRecipes;
    }
}
exports.default = DrinksModel;
//# sourceMappingURL=Drinks.model.js.map