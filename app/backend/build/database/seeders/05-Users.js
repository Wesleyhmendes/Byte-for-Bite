"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ADMIN email: admin@admin.com PASSWORD: secret_admin
// USER email: user@user.com PASSWORD: secret_user
const fs = require('fs');
const path = require('path');
exports.default = {
    up: async (queryInterface) => {
        const filePath = path.join(__dirname, '..', '..', '..', 'jsons', 'users.db.json');
        const jsonData = fs.readFileSync(filePath);
        const users = JSON.parse(jsonData);
        await queryInterface.bulkInsert('users', users, {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', {});
    },
};
//# sourceMappingURL=05-Users.js.map