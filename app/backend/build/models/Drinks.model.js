"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Drinks_Recipes_model_1 = require("../database/models/Drinks-Recipes.model");
class DrinksModel {
    constructor() {
        this.model = Drinks_Recipes_model_1.default;
    }
    async findAll() {
        const dbResponse = await this.model.findAll();
        if (!dbResponse)
            return null;
        return dbResponse;
    }
    async getFilteredDrinks(q) {
        const dbResponse = await this.model.findAll({ where: {
                strDrink: {
                    [sequelize_1.Op.like]: `%${q}%`
                }
            } });
        if (!dbResponse)
            return null;
        return dbResponse;
    }
    async getDrinkByCategory(q) {
        const dbResponse = await this.model.findAll({
            where: {
                strCategory: q
            }
        });
        if (!dbResponse)
            return null;
        return dbResponse;
    }
}
exports.default = DrinksModel;
//# sourceMappingURL=Drinks.model.js.map