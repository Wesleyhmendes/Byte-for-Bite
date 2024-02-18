"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Meals_Recipes_1 = require("../database/models/Meals-Recipes");
const Categories_model_1 = require("../database/models/Categories.model");
class MealsModel {
    constructor() {
        this.mealsModel = Meals_Recipes_1.default;
    }
    async findAll() {
        const recipes = await this.mealsModel.findAll({
            include: [{
                    model: Categories_model_1.default, as: 'category', attributes: ['strCategory']
                }],
            attributes: { exclude: ['strCategory'] }
        });
        const newRecipes = recipes.map((recipe) => {
            const teste = recipe.category;
        });
        return recipes;
    }
    async findByName(name) {
        const recipes = await this.mealsModel.findAll({ where: {
                strMeal: {
                    [sequelize_1.Op.like]: `%${name}%`
                }
            } });
        return recipes;
    }
    ;
    async findByFirstLetter(letter) {
        const recipes = await this.mealsModel.findAll({
            where: {
                strMeal: {
                    [sequelize_1.Op.like]: `${letter}%`
                }
            }
        });
        return recipes;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map