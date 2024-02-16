"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
const MealsService_1 = require("../services/MealsService");
class MealsController {
    constructor(mealsService = new MealsService_1.default()) {
        this.mealsService = mealsService;
    }
    async getAllMealsRecipe(req, res) {
        const { status, data } = await this.mealsService.getAllMealsRecipe();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = MealsController;
//# sourceMappingURL=MealsController.js.map