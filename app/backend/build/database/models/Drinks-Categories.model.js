"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class DrinksCategories extends sequelize_1.Model {
}
DrinksCategories.init({
    idCategory: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    strCategory: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'DrinksCategories',
    timestamps: false,
});
exports.default = DrinksCategories;
//# sourceMappingURL=Drinks-Categories.model.js.map