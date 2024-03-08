import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import MealsRecipe from './04Meals-Recipes';
import SequelizeUsers from './00UserModel';
import { IMealID } from '../../Interfaces/meals/IMealID';

export default class FavoriteMealsModel extends Model<InferAttributes<FavoriteMealsModel>,
  InferCreationAttributes<FavoriteMealsModel>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare favoriteRecipes: IMealID[];
}

FavoriteMealsModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  favoriteRecipes: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'favorite_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(FavoriteMealsModel, { foreignKey: 'id' })
MealsRecipe.belongsTo(FavoriteMealsModel, { foreignKey: 'idMeal' })
