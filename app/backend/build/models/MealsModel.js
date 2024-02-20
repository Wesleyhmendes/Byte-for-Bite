"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Meals_Recipes_1 = require("../database/models/Meals-Recipes");
const Categories_model_1 = require("../database/models/Categories.model");
class MealsModel {
    constructor() {
        this.mealsModel = Meals_Recipes_1.default;
        this.mealsCategoryModel = Categories_model_1.default;
    }
    async findAll() {
        const recipes = await this.mealsModel.findAll({
            include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    async findByName(name) {
        const recipes = await this.mealsModel.findAll({ where: {
                strMeal: {
                    [sequelize_1.Op.like]: `%${name}%`
                }
            }, include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] } });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
    }
    ;
    async findByFirstLetter(letter) {
        const recipes = await this.mealsModel.findAll({
            where: {
                strMeal: {
                    [sequelize_1.Op.like]: `${letter}%`
                }
            },
            include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
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
            include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory'],
                }],
            attributes: { exclude: ['strCategory'] },
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        }).filter((recipe) => recipe.strCategory === category);
        return newRecipes;
    }
    async findRecipeByArea(area) {
        const recipes = await this.mealsModel.findAll({
            where: { strArea: area },
            include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory'],
                }],
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
        const recipe = await this.mealsModel.findByPk(id);
        return recipe;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map