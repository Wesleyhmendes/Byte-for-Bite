"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _04Meals_Recipes_1 = require("./04Meals-Recipes");
class FinishedMealsModel extends sequelize_1.Model {
}
exports.default = FinishedMealsModel;
FinishedMealsModel.init({
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
}, {
    sequelize: _1.default,
    modelName: 'finished_meals',
    timestamps: false,
});
FinishedMealsModel.belongsTo(_04Meals_Recipes_1.default, { as: 'finishedRecipes', foreignKey: 'mealId' });
// SequelizeUsers.belongsTo(FinishedMealsModel, { foreignKey: 'id'})
// MealsRecipe.belongsTo(FinishedMealsModel, { foreignKey: 'idMeal'})
//# sourceMappingURL=10Finished-Meals.js.map