"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
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
exports.default = MealsCategories;
//# sourceMappingURL=Categories.model.js.map