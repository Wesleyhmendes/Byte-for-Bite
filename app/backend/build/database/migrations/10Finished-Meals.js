"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('finished_meals', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            recipeId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('finished_meals');
    },
};
//# sourceMappingURL=10Finished-Meals.js.map