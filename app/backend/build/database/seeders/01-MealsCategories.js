"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.default = {
    up: async (queryInterface) => {
        const filePath = path.join(__dirname, '..', '..', '..', 'jsons', 'mealsCategory.db.json');
        const jsonData = fs.readFileSync(filePath);
        const categories = JSON.parse(jsonData);
        await queryInterface.bulkInsert('meals_categories', categories, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('meals_categories', {});
    },
};
//# sourceMappingURL=01-MealsCategories.js.map