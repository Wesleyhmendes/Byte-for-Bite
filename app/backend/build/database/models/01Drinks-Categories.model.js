"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _03Drinks_Recipes_model_1 = require("./03Drinks-Recipes.model");
class DrinksCategories extends sequelize_1.Model {
}
exports.default = DrinksCategories;
DrinksCategories.init({
    idCategory: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    strCategory: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'drinks_categories',
    timestamps: false,
});
_03Drinks_Recipes_model_1.default.belongsTo(DrinksCategories, { as: 'category', foreignKey: 'strCategory' });
//# sourceMappingURL=01Drinks-Categories.model.js.map