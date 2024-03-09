"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _00UserModel_1 = require("./00UserModel");
const _04Meals_Recipes_1 = require("./04Meals-Recipes");
class InProgressMealsModel extends sequelize_1.Model {
}
exports.default = InProgressMealsModel;
InProgressMealsModel.init({
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
    markedIngredients: {
        type: sequelize_1.DataTypes.JSON
    }
}, {
    sequelize: _1.default,
    modelName: 'in_progress_meals',
    timestamps: false,
});
_00UserModel_1.default.belongsTo(InProgressMealsModel, { foreignKey: 'id' });
_04Meals_Recipes_1.default.belongsTo(InProgressMealsModel, { foreignKey: 'idMeal' });
//# sourceMappingURL=08In-Progress-Meals.js.map