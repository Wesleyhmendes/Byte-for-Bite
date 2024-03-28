"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('meals_categories', {
            idCategory: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            strCategory: {
                type: sequelize_1.DataTypes.STRING,
            },
            strCategoryThumb: {
                type: sequelize_1.DataTypes.STRING,
            },
            strCategoryDescription: {
                type: sequelize_1.DataTypes.STRING(1000),
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('meals_categories');
    },
};
//# sourceMappingURL=01Meals-Categories.js.map