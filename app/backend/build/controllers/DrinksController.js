"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const DrinksService_1 = require("../services/DrinksService");
class MatchesController {
    constructor(drinkService = new DrinksService_1.default()) {
        this.drinkService = drinkService;
    }
    async getDrinks(req, res) {
        const { status, data } = await this.drinkService.getDrinks();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getFilteredDrinks(req, res) {
        const q = req.query.q;
        const { status, data } = await this.drinkService.getFilteredDrinks(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getDrinksByFirstLetter(req, res) {
        const q = req.query.q;
        const { status, data } = await this.drinkService.getDrinksByFirstLetter(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getDrinkByCategory(req, res) {
        const { q } = req.query;
        const { status, data } = await this.drinkService.getDrinkByCategory(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getRandomDrink(req, res) {
        const { status, data } = await this.drinkService.getRandomDrink();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getIngredients(req, res) {
        const { q } = req.query;
        if (q) {
            const { status, data } = await this.drinkService.getByIngredients(q);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        const { status, data } = await this.drinkService.getAllIngredients();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MatchesController;
//# sourceMappingURL=DrinksController.js.map