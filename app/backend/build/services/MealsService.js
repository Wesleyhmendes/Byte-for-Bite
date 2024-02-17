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
}
exports.default = MealsService;
//# sourceMappingURL=MealsService.js.map