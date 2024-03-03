import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class MealsRecipe extends Model<InferAttributes<MealsRecipe>,
InferCreationAttributes<MealsRecipe>> {
  declare idMeal: CreationOptional<number>;
  declare strMeal: string;
  declare strDrinkAlternate: boolean;
  declare strCategory: number;
  declare strArea: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1: string;
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strIngredient7: string;
  declare strIngredient8: string;
  declare strIngredient9: string;
  declare strIngredient10: string;
  declare strIngredient11: string;
  declare strIngredient12: string;
  declare strIngredient13: string;
  declare strIngredient14: string;
  declare strIngredient15: string;
  declare strIngredient16: string;
  declare strIngredient17: string;
  declare strIngredient18: string;
  declare strIngredient19: string;
  declare strIngredient20: string;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
  declare strMeasure7: string;
  declare strMeasure8: string;
  declare strMeasure9: string;
  declare strMeasure10: string;
  declare strMeasure11: string;
  declare strMeasure12: string;
  declare strMeasure13: string;
  declare strMeasure14: string;
  declare strMeasure15: string;
  declare strMeasure16: string;
  declare strMeasure17: string;
  declare strMeasure18: string;
  declare strMeasure19: string;
  declare strMeasure20: string;
  declare strSource: string;
  declare strImageSource: string;
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: string;

}

MealsRecipe.init({
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
    type: DataTypes.STRING,
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
}, {
  sequelize: db,
  modelName: 'meals_recipes',
  timestamps: false,
});

export default MealsRecipe;