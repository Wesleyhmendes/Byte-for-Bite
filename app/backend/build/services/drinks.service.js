"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Drinks_model_1 = require("../models/Drinks.model");
class MatchesService {
    constructor(drinkModel = new Drinks_model_1.default()) {
        this.drinkModel = drinkModel;
    }
    async getDrinks() {
        const drinks = await this.drinkModel.findAll();
        return { status: 'SUCCESSFUL', data: drinks };
    }
}
exports.default = MatchesService;
//# sourceMappingURL=drinks.service.js.map