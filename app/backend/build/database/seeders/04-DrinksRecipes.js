"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
exports.default = {
    up: async (queryInterface) => {
        const filePath = path.join(__dirname, '..', '..', '..', 'drinksRecipes.db.json');
        const jsonData = fs.readFileSync(filePath);
        const drinks = JSON.parse(jsonData);
        await queryInterface.bulkInsert('drinks_recipes', drinks, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('drinks_recipes', {});
    },
};
//# sourceMappingURL=04-DrinksRecipes.js.map