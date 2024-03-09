"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _04Meals_Recipes_1 = require("./04Meals-Recipes");
class FavoriteMealsModel extends sequelize_1.Model {
}
exports.default = FavoriteMealsModel;
FavoriteMealsModel.init({
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
    modelName: 'favorite_meals',
    timestamps: false,
});
FavoriteMealsModel.belongsTo(_04Meals_Recipes_1.default, { as: 'favoriteRecipes', foreignKey: 'mealId' });
// SequelizeUsers.belongsToMany(FavoriteMealsModel, { foreignKey: 'id' })
// MealsRecipe.hasMany(FavoriteMealsModel, { as: 'favoriteRecipes', foreignKey: 'idMeal' })
//# sourceMappingURL=06Favorite-Meals.js.map