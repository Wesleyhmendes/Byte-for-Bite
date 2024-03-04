"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _04Meals_Recipes_1 = require("./04Meals-Recipes");
class MealsCategories extends sequelize_1.Model {
}
MealsCategories.init({
    idCategory: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    strCategory: {
        type: sequelize_1.DataTypes.STRING,
    },
    strCategoryThumb: {
        type: sequelize_1.DataTypes.STRING,
    },
    strCategoryDescription: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'meals_categories',
    timestamps: false,
});
_04Meals_Recipes_1.default.belongsTo(MealsCategories, { as: 'category', foreignKey: 'strCategory' });
exports.default = MealsCategories;
//# sourceMappingURL=02Meals-Categories.model.js.map