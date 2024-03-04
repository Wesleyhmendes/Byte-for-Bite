"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const MealsService_1 = require("../services/MealsService");
class MealsController {
    constructor(mealsService = new MealsService_1.default()) {
        this.mealsService = mealsService;
    }
    async getAllMealsRecipe(req, res) {
        const token = req.headers.authorization;
        const { q } = req.query;
        if (q) {
            const { status, data } = await this.mealsService.getRecipeByName(q);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        const { status, data } = await this.mealsService.getAllMealsRecipe();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    ;
    async getByFirstLetter(req, res) {
        const { q } = req.query;
        const { status, data } = await this.mealsService.getByFirstLetter(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    ;
    async getRandomRecipe(_req, res) {
        const { status, data } = await this.mealsService.getRandomRecipe();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAllCategories(_req, res) {
        const { status, data } = await this.mealsService.getAllCategories();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAllAreas(_req, res) {
        const { status, data } = await this.mealsService.getAllAreas();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getRecipeByCategory(req, res) {
        const { q } = req.query;
        const { status, data } = await this.mealsService.getByCategory(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getRecipeByArea(req, res) {
        const { q } = req.query;
        const { status, data } = await this.mealsService.getByArea(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getAllIngredients(req, res) {
        const { status, data } = await this.mealsService.getAllIngredients();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getByIngredient(req, res) {
        const { q } = req.query;
        const { status, data } = await this.mealsService.getByIngredient(q);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getById(req, res) {
        const { id } = req.params;
        console.log(id);
        const { status, data } = await this.mealsService.getRecipeById(Number(id));
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MealsController;
//# sourceMappingURL=MealsController.js.map