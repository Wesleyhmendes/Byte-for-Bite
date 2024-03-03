"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _00UserModel_1 = require("./00UserModel");
const _04Meals_Recipes_1 = require("./04Meals-Recipes");
class FinishedMealsModel extends sequelize_1.Model {
}
exports.default = FinishedMealsModel;
FinishedMealsModel.init({
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
    mealId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'meals_recipes',
            key: 'idMeal'
        }
    },
}, {
    sequelize: _1.default,
    modelName: 'finished_meals',
    timestamps: false,
});
_00UserModel_1.default.belongsTo(FinishedMealsModel, { as: 'userId', foreignKey: 'id' });
_04Meals_Recipes_1.default.belongsTo(FinishedMealsModel, { as: 'mealId', foreignKey: 'idMeal' });
//# sourceMappingURL=10Finished-Meals.js.map