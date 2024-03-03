"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const _03Drinks_Recipes_model_1 = require("./03Drinks-Recipes.model");
const _00UserModel_1 = require("./00UserModel");
class InProgressDrinksModel extends sequelize_1.Model {
}
exports.default = InProgressDrinksModel;
InProgressDrinksModel.init({
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
    drinkId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'drinks_recipes',
            key: 'idDrink'
        }
    },
    markedIngredients: {
        type: sequelize_1.DataTypes.JSON
    }
}, {
    sequelize: _1.default,
    modelName: 'in_progress_drinks',
    timestamps: false,
});
_00UserModel_1.default.belongsTo(InProgressDrinksModel, { as: 'userId', foreignKey: 'id' });
_03Drinks_Recipes_model_1.default.belongsTo(InProgressDrinksModel, { as: 'drinkId', foreignKey: 'idDrink' });
//# sourceMappingURL=07In-Progress-Drinks.js.map