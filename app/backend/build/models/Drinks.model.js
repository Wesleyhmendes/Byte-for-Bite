"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = DrinksModel;
//# sourceMappingURL=Drinks.model.js.map