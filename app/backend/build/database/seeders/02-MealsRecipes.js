"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.default = {
    up: async (queryInterface) => {
        const filePath = path.join(__dirname, '..', '..', '..', 'mealRecipes.db.json');
        const jsonData = fs.readFileSync(filePath);
        const meals = JSON.parse(jsonData);
        await queryInterface.bulkInsert('meals_recipes', meals, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('meals_recipes', {});
    },
};
//# sourceMappingURL=02-MealsRecipes.js.map