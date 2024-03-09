"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('in_progress_drinks', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            drinkId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            markedIngredients: {
                type: sequelize_1.DataTypes.JSON,
            }
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('in_progress_drinks');
    },
};
//# sourceMappingURL=07In-Progress-Drinks.js.map