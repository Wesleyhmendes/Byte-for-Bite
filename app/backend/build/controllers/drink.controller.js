"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drinks_service_1 = require("../services/drinks.service");
class MatchesController {
    constructor(drinkService = new drinks_service_1.default()) {
        this.drinkService = drinkService;
    }
    async getDrinks(req, res) {
        const { status, data } = await this.drinkService.getDrinks();
        return res.status(200).json({ teste: "teste" });
    }
}
exports.default = MatchesController;
//# sourceMappingURL=drink.controller.js.map