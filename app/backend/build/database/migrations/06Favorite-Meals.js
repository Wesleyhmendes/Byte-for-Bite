"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('favorite_meals', {
            mealId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                references: {
                    model: 'meals_recipes',
                    key: 'idMeal'
                }
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('favorite_meals');
    },
};
//# sourceMappingURL=06Favorite-Meals.js.map