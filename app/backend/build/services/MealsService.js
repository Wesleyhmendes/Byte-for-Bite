"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MealsModel_1 = require("../models/MealsModel");
class MealsService {
    constructor(mealsModel = new MealsModel_1.default()) {
        this.mealsModel = mealsModel;
    }
}
exports.default = MealsService;
//# sourceMappingURL=MealsService.js.map