import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import DrinksRecipes from './Drinks-Recipes.model';

class DrinksCategories extends Model<InferAttributes<DrinksCategories>,
InferCreationAttributes<DrinksCategories>> {
  declare idCategory: CreationOptional<number>;
  declare strCategory: string;
  declare strCategoryThumb: string;
  declare strCategoryDescription: string;
}

DrinksCategories.init({
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
  modelName: 'drinks_categories',
  timestamps: false,
});

DrinksRecipes.belongsTo(DrinksCategories, {as: 'category', foreignKey: 'strCategory'})

export default DrinksCategories;