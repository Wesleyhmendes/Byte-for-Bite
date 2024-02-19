"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Drinks_Recipes_model_1 = require("../database/models/Drinks-Recipes.model");
const Drinks_Categories_model_1 = require("../database/models/Drinks-Categories.model");
const Drinks_Categories_model_2 = require("../database/models/Drinks-Categories.model");
class DrinksModel {
    constructor() {
        this.Drinkmodel = Drinks_Recipes_model_1.default;
        this.CategoryModel = Drinks_Categories_model_1.default;
    }
    async findAll() {
        const recipes = await this.Drinkmodel.findAll({
            include: [{
                    model: Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        return newRecipes;
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
                    model: Drinks_Categories_model_2.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const { category, ...rest } = recipe.toJSON();
            return { ...rest, strCategory: category === null || category === void 0 ? void 0 : category.strCategory };
        });
        if (q) {
            return newRecipes.filter((recipe) => recipe.strCategory === q);
        }
        const categories = await this.CategoryModel.findAll({
            attributes: { exclude: ['idCategory'] }
        });
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
}
exports.default = DrinksModel;
//# sourceMappingURL=Drinks.model.js.map