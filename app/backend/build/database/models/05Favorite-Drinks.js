"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _03Drinks_Recipes_model_1 = require("./03Drinks-Recipes.model");
class FavoriteDrinksModel extends sequelize_1.Model {
}
exports.default = FavoriteDrinksModel;
FavoriteDrinksModel.init({
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
}, {
    sequelize: _1.default,
    modelName: 'favorite_drinks',
    timestamps: false,
});
FavoriteDrinksModel.belongsTo(_03Drinks_Recipes_model_1.default, { as: 'favoriteRecipes', foreignKey: 'drinkId' });
// SequelizeUsers.belongsTo(FavoriteDrinksModel, {as: 'userId', foreignKey: 'id'})
// DrinksRecipes.belongsTo(FavoriteDrinksModel, {as: 'drinkId', foreignKey: 'idDrink'})
//# sourceMappingURL=05Favorite-Drinks.js.map