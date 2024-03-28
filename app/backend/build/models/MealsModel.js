"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _04Meals_Recipes_1 = require("../database/models/04Meals-Recipes");
const _02Meals_Categories_model_1 = require("../database/models/02Meals-Categories.model");
const _08In_Progress_Meals_1 = require("../database/models/08In-Progress-Meals");
const startRecipeInProgress_1 = require("../utils/startRecipeInProgress");
const _06Favorite_Meals_1 = require("../database/models/06Favorite-Meals");
const _10Finished_Meals_1 = require("../database/models/10Finished-Meals");
class MealsModel {
    constructor() {
        this.mealsModel = _04Meals_Recipes_1.default;
        this.inProgressModel = _08In_Progress_Meals_1.default;
        this.mealsCategoryModel = _02Meals_Categories_model_1.default;
        this.favoriteRecipesModel = _06Favorite_Meals_1.default;
        this.doneMealsModel = _10Finished_Meals_1.default;
    }
    async findAll() {
        const recipes = await this.mealsModel.findAll({
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async findByName(name) {
        const recipes = await this.mealsModel.findAll({
            where: {
                strMeal: {
                    [sequelize_1.Op.like]: `%${name}%`,
                },
            },
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async findByFirstLetter(letter) {
        const recipes = await this.mealsModel.findAll({
            where: {
                strMeal: {
                    [sequelize_1.Op.like]: `${letter}%`,
                },
            },
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async findAllCategories() {
        const categories = await this.mealsCategoryModel.findAll();
        return categories;
    }
    async findAllAreas() {
        const areas = await this.mealsModel.findAll({
            attributes: ['strArea'],
            group: ['strArea'],
        });
        return areas;
    }
    async findRecipeByCategory(category) {
        const recipes = await this.mealsModel.findAll({
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes
            .map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        })
            .filter((recipe) => { var _a; return ((_a = recipe.strCategory) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === category.toLocaleLowerCase(); });
        return newRecipes;
    }
    async findRecipeByArea(area) {
        const recipes = await this.mealsModel.findAll({
            where: { strArea: area },
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async findAllIngredients() {
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
    async findByIngredient(ingredient) {
        const recipes = await this.findAll();
        const recipesFiltred = recipes.filter((recipe) => {
            const values = Object.values(recipe);
            const valuesLower = values.map((value) => {
                return typeof value === 'string' ? value.toLowerCase() : value;
            });
            if (valuesLower.includes(ingredient.toLowerCase())) {
                return true;
            }
            return false;
        });
        return recipesFiltred;
    }
    async findRecipeById(id) {
        const recipe = await this.mealsModel.findByPk(id, {
            include: [
                {
                    model: _02Meals_Categories_model_1.default,
                    as: 'category',
                    attributes: ['strCategory'],
                },
            ],
            attributes: { exclude: ['strCategory'] },
        });
        if (recipe) {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        }
        return null;
    }
    async addMealInProgress(recipeInProgress) {
        const defaultIngredients = (0, startRecipeInProgress_1.startMealRecipeInProgress)();
        const { dataValues } = await this.inProgressModel.create({
            ...recipeInProgress,
            markedIngredients: defaultIngredients,
        });
        return dataValues;
    }
    async findMealInProgress(recipeInProgress) {
        const { userId, mealId } = recipeInProgress;
        const foundRecipe = await this.inProgressModel.findOne({
            where: {
                userId,
                mealId,
            },
        });
        return foundRecipe;
    }
    async updateMarkedIngredients(recipeInProgress) {
        const { userId, mealId, markedIngredients } = recipeInProgress;
        const rowCount = await this.inProgressModel.update({ markedIngredients }, {
            where: {
                userId,
                mealId,
            },
        });
        if (rowCount[0] === 0)
            return null;
        return rowCount[0];
    }
    async createFavoriteMeals(userId, mealId) {
        const findFavorite = await this.findFavorite(userId, mealId);
        if (!findFavorite) {
            const teste = await this.favoriteRecipesModel.create({
                userId,
                mealId,
            });
            return teste.dataValues;
        }
        await this.favoriteRecipesModel.destroy({ where: { userId, mealId } });
    }
    async findFavorite(userId, mealId) {
        const foundFavorite = await this.favoriteRecipesModel.findOne({
            where: {
                userId,
                mealId,
            },
        });
        return foundFavorite;
    }
    async getFavoriteRecipes(userId) {
        const favorites = await this.favoriteRecipesModel.findAll({
            where: { userId },
            include: [
                {
                    model: _04Meals_Recipes_1.default,
                    as: 'favoriteRecipes',
                    attributes: ['idMeal', 'strMeal', 'strMealThumb', 'strArea'],
                },
            ],
            attributes: { exclude: ['mealId'] },
        });
        return favorites;
    }
    async findDone(userId, mealId) {
        const foundDone = await this.doneMealsModel.findOne({
            where: {
                userId,
                mealId,
            },
        });
        return foundDone;
    }
    async createDoneMeals(userId, mealId) {
        const findDone = await this.findDone(userId, mealId);
        if (!findDone) {
            await this.inProgressModel.destroy({ where: { userId, mealId } });
            const { dataValues } = await this.doneMealsModel.create({
                userId,
                mealId,
            });
            return dataValues;
        }
        await this.inProgressModel.destroy({ where: { userId, mealId } });
        return findDone;
    }
    async getDoneRecipes(userId) {
        const doneRecipes = await this.doneMealsModel.findAll({
            where: { userId },
            include: [
                {
                    model: _04Meals_Recipes_1.default,
                    as: 'finishedRecipes',
                    attributes: ['idMeal', 'strMeal', 'strMealThumb', 'strArea'],
                },
            ],
            attributes: { exclude: ['mealId'] },
        });
        return doneRecipes;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map