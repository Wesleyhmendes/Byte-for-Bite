"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class MealsRecipe extends sequelize_1.Model {
}
MealsRecipe.init({
    idMeal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    strMeal: {
        type: sequelize_1.DataTypes.STRING,
    },
    strDrinkAlternate: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    strCategory: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'meals_categories',
            key: 'idCategory',
        }
    },
    strArea: {
        type: sequelize_1.DataTypes.STRING,
    },
    strInstructions: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMealThumb: {
        type: sequelize_1.DataTypes.STRING,
    },
    strTags: {
        type: sequelize_1.DataTypes.STRING,
    },
    strYoutube: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient1: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient2: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient3: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient4: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient5: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient6: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient7: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient8: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient9: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient10: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient11: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient12: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient13: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient14: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient15: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient16: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient17: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient18: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient19: {
        type: sequelize_1.DataTypes.STRING,
    },
    strIngredient20: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure1: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure2: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure3: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure4: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure5: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure6: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure7: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure8: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure9: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure10: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure11: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure12: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure13: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure14: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure15: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure16: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure17: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure18: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure19: {
        type: sequelize_1.DataTypes.STRING,
    },
    strMeasure20: {
        type: sequelize_1.DataTypes.STRING,
    },
    strSource: {
        type: sequelize_1.DataTypes.STRING,
    },
    strImageSource: {
        type: sequelize_1.DataTypes.STRING,
    },
    strCreativeCommonsConfirmed: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateModified: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    sequelize: _1.default,
    modelName: 'meals_recipes',
    timestamps: false,
});
exports.default = MealsRecipe;
//# sourceMappingURL=04Meals-Recipes.js.map