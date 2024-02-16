"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.default = {
    up: async (queryInterface) => {
        const filePath = path.join(__dirname, '..', '..', '..', 'drinksCategory.db.json');
        const jsonData = fs.readFileSync(filePath);
        const categories = JSON.parse(jsonData);
        await queryInterface.bulkInsert('drinks_categories', categories, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('drinks_categories', {});
    },
};
//# sourceMappingURL=03-DrinksCategories.js.map