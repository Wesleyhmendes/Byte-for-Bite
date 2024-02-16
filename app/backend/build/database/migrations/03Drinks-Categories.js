"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks_recipes', {
            idCategory: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            strCategory: {
                type: sequelize_1.DataTypes.STRING,
            },
        });
    }
};
//# sourceMappingURL=03Drinks-Categories.js.map