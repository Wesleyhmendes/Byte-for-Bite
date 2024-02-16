import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMealRecipes from '../../Interfaces/IMealRecipes';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMealRecipes>>('meals_recipes', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
        type: DataTypes.STRING,
      },

      strDrinkAlternate: {
        type: DataTypes.BOOLEAN,
      },

      strCategory: {
        type: DataTypes.INTEGER,
        references: {
          model: 'meals_categories',
          key: 'idCategory',
        }
      },

      strArea: {
        type: DataTypes.STRING,
      },

      strInstructions: {
        type: DataTypes.TEXT,
      },

      strMealThumb: {
        type: DataTypes.STRING,
      },

      strTags: {
        type: DataTypes.STRING,
      },

      strYoutube: {
        type: DataTypes.STRING,
      },

      strIngredient1: {
        type: DataTypes.STRING,
      },

      strIngredient2: {
        type: DataTypes.STRING,
      },

      strIngredient3: {
        type: DataTypes.STRING,
      },

      strIngredient4: {
        type: DataTypes.STRING,
      },

      strIngredient5: {
        type: DataTypes.STRING,
      },

      strIngredient6: {
        type: DataTypes.STRING,
      },

      strIngredient7: {
        type: DataTypes.STRING,
      },

      strIngredient8: {
        type: DataTypes.STRING,
      },

      strIngredient9: {
        type: DataTypes.STRING,
      },

      strIngredient10: {
        type: DataTypes.STRING,
      },

      strIngredient11: {
        type: DataTypes.STRING,
      },

      strIngredient12: {
        type: DataTypes.STRING,
      },

      strIngredient13: {
        type: DataTypes.STRING,
      },

      strIngredient14: {
        type: DataTypes.STRING,
      },

      strIngredient15: {
        type: DataTypes.STRING,
      },

      strIngredient16: {
        type: DataTypes.STRING,
      },

      strIngredient17: {
        type: DataTypes.STRING,
      },

      strIngredient18: {
        type: DataTypes.STRING,
      },

      strIngredient19: {
        type: DataTypes.STRING,
      },

      strIngredient20: {
        type: DataTypes.STRING,
      },

      strMeasure1: {
        type: DataTypes.STRING,
      },

      strMeasure2: {
        type: DataTypes.STRING,
      },

      strMeasure3: {
        type: DataTypes.STRING,
      },

      strMeasure4: {
        type: DataTypes.STRING,
      },

      strMeasure5: {
        type: DataTypes.STRING,
      },

      strMeasure6: {
        type: DataTypes.STRING,
      },

      strMeasure7: {
        type: DataTypes.STRING,
      },

      strMeasure8: {
        type: DataTypes.STRING,
      },

      strMeasure9: {
        type: DataTypes.STRING,
      },

      strMeasure10: {
        type: DataTypes.STRING,
      },

      strMeasure11: {
        type: DataTypes.STRING,
      },

      strMeasure12: {
        type: DataTypes.STRING,
      },

      strMeasure13: {
        type: DataTypes.STRING,
      },

      strMeasure14: {
        type: DataTypes.STRING,
      },

      strMeasure15: {
        type: DataTypes.STRING,
      },

      strMeasure16: {
        type: DataTypes.STRING,
      },

      strMeasure17: {
        type: DataTypes.STRING,
      },

      strMeasure18: {
        type: DataTypes.STRING,
      },

      strMeasure19: {
        type: DataTypes.STRING,
      },

      strMeasure20: {
        type: DataTypes.STRING,
      },

      strSource: {
        type: DataTypes.STRING,
      },

      strImageSource: {
        type: DataTypes.STRING,
      },

      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
      },

      dateModified: {
        type: DataTypes.STRING,
      }

    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_categories');
  },
};