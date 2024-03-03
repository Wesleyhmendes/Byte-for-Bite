"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const DrinksService_1 = require("../services/DrinksService");
class MatchesController {
    constructor(drinkService = new DrinksService_1.default()) {
        this.drinkService = drinkService;
    }
    async getAllDrinks(req, res) {
        const { q } = req.query;
        if (!q) {
            const { status, data } = await this.drinkService.getDrinks();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        const { status, data } = await this.drinkService.getDrinkByName(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getById(req, res) {
        const { id } = req.params;
        const { status, data } = await this.drinkService.getById(Number(id));
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getDrinksByFirstLetter(req, res) {
        const { q } = req.query;
        const { status, data } = await this.drinkService.getDrinksByFirstLetter(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAllCategories(_req, res) {
        const { status, data } = await this.drinkService.getAllCategories();
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
    async getByIngredient(req, res) {
        const { q } = req.query;
        const { status, data } = await this.drinkService.getByIngredients(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAllIngredients(_req, res) {
        const { status, data } = await this.drinkService.getAllIngredients();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MatchesController;
//# sourceMappingURL=DrinksController.js.map