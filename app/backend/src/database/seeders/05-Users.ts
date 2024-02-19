// ADMIN email: admin@admin.com PASSWORD: secret_admin
// USER email: user@user.com PASSWORD: secret_user
const fs = require('fs');
const path = require('path');
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    const filePath = path.join(__dirname, '..', '..', '..', 'jsons', 'users.db.json');

    const jsonData = fs.readFileSync(filePath);
    const users = JSON.parse(jsonData);

    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}