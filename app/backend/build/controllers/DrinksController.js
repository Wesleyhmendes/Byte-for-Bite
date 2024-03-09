"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const DrinksService_1 = require("../services/DrinksService");
class DrinksController {
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
    async addDrinkInProgress(req, res) {
        const inProgress = req.body;
        const { status, data } = await this.drinkService.addDrinkInProgress(inProgress);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async findRecipeInProgressById(req, res) {
        const { id } = req.params;
        const { user } = req.query;
        const { status, data } = await this.drinkService.findRecipeInProgressById({
            userId: Number(user),
            drinkId: Number(id),
        });
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async updateRecipeInProgressById(req, res) {
        const { id } = req.params;
        const { user } = req.query;
        const { markedIngredients } = req.body;
        const { status, data } = await this.drinkService.updateRecipeInProgressById({
            userId: Number(user),
            drinkId: Number(id),
            markedIngredients,
        });
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = DrinksController;
//# sourceMappingURL=DrinksController.js.map