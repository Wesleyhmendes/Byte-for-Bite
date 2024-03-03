"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _00UserModel_1 = require("./00UserModel");
const _03Drinks_Recipes_model_1 = require("./03Drinks-Recipes.model");
class FinishedDrinksModel extends sequelize_1.Model {
}
exports.default = FinishedDrinksModel;
FinishedDrinksModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    drinkId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'drinks_recipes',
            key: 'idMeal'
        }
    },
}, {
    sequelize: _1.default,
    modelName: 'finished_drinks',
    timestamps: false,
});
_00UserModel_1.default.belongsTo(FinishedDrinksModel, { as: 'userId', foreignKey: 'id' });
_03Drinks_Recipes_model_1.default.belongsTo(FinishedDrinksModel, { as: 'drinkId', foreignKey: 'idDrink' });
//# sourceMappingURL=09Finished-Drinks.js.map