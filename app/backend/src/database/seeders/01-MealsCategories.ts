const fs = require('fs');
const path = require('path');
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    const filePath = path.join(__dirname, '..', '..', '..', 'jsons', 'mealsCategory.db.json');

    const jsonData = fs.readFileSync(filePath);
    const categories = JSON.parse(jsonData);

    await queryInterface.bulkInsert('meals_categories', categories, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meals_categories', {});
  },
}