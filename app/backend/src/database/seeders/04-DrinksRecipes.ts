const fs = require('fs');
const path = require('path');
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    const filePath = path.join(__dirname, '..', '..', '..', 'drinksRecipes.db.json');

    const jsonData = fs.readFileSync(filePath);
    const drinks = JSON.parse(jsonData);

    await queryInterface.bulkInsert('drinks_recipes', drinks, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drinks_recipes', {});
  },
}