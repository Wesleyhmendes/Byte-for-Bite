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

export default class FavoriteMealsModel extends Model<InferAttributes<FavoriteMealsModel>,
  InferCreationAttributes<FavoriteMealsModel>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare mealId: number;
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
  mealId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'meals_recipes',
      key: 'idMeal'
    }
  },
}, {
  sequelize: db,
  modelName: 'favorite_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(FavoriteMealsModel, {as: 'userId', foreignKey: 'id'})
MealsRecipe.belongsTo(FavoriteMealsModel, {as: 'mealId', foreignKey: 'idMeal'})
