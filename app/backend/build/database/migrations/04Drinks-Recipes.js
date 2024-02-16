"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('drinks_recipes', {
            idDrink: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            strDrink: {
                type: sequelize_1.DataTypes.STRING,
            },
            strDrinkAlternate: {
                type: sequelize_1.DataTypes.STRING,
            },
            strTags: {
                type: sequelize_1.DataTypes.STRING,
            },
            strVideo: {
                type: sequelize_1.DataTypes.STRING,
            },
            strCategory: {
                type: sequelize_1.DataTypes.INTEGER,
                references: {
                    model: 'drinks_categories',
                    key: 'idCategory'
                }
            },
            strIBA: {
                type: sequelize_1.DataTypes.STRING,
            },
            strAlcoholic: {
                type: sequelize_1.DataTypes.STRING,
            },
            strGlass: {
                type: sequelize_1.DataTypes.STRING,
            },
            strInstructions: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsES: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsDE: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsFR: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsIT: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsZHHANS: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strInstructionsZHHANT: {
                type: sequelize_1.DataTypes.TEXT,
            },
            strDrinkThumb: {
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
            strImageSource: {
                type: sequelize_1.DataTypes.STRING,
            },
            strImageAttribution: {
                type: sequelize_1.DataTypes.STRING,
            },
            strCreativeCommonsConfirmed: {
                type: sequelize_1.DataTypes.STRING,
            },
            dateModified: {
                type: sequelize_1.DataTypes.STRING,
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('drinks_recipes');
    },
};
//# sourceMappingURL=04Drinks-Recipes.js.map