"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('finished_drinks', {
            drinkId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                references: {
                    model: 'drinks_recipes',
                    key: 'idDrink'
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
        return queryInterface.dropTable('finished_drinks');
    },
};
//# sourceMappingURL=09Finished-Drinks.js.map