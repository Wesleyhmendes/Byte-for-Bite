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
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map