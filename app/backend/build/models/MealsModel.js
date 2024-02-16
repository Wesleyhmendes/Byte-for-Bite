"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meals_Recipes_1 = require("../database/models/Meals-Recipes");
class MealsModel {
    constructor() {
        this.mealsModel = Meals_Recipes_1.default;
    }
    findAll() {
        const recipes = this.mealsModel.findAll();
        return recipes;
    }
}
exports.default = MealsModel;
//# sourceMappingURL=MealsModel.js.map