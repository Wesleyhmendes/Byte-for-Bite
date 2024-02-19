"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Drinks_Recipes_model_1 = require("./Drinks-Recipes.model");
class DrinksCategories extends sequelize_1.Model {
}
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
Drinks_Recipes_model_1.default.belongsTo(DrinksCategories, { as: 'category', foreignKey: 'strCategory' });
exports.default = DrinksCategories;
//# sourceMappingURL=Drinks-Categories.model.js.map