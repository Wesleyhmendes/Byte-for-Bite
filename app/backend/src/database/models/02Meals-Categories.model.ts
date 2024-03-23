import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import MealsRecipe from './04Meals-Recipes';

class MealsCategories extends Model<InferAttributes<MealsCategories>,
InferCreationAttributes<MealsCategories>> {
  declare idCategory: CreationOptional<number>;
  declare strCategory: string;
  declare strCategoryThumb: string;
  declare strCategoryDescription: string;
}

MealsCategories.init({
  idCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING,
  },
  strCategoryThumb: {
    type: DataTypes.STRING,
  },
  strCategoryDescription: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'meals_categories',
  timestamps: false,
});


MealsRecipe.belongsTo(MealsCategories, {as: 'category', foreignKey: 'strCategory'})

export default MealsCategories;