import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeUsers from './00UserModel';
import MealsRecipe from './04Meals-Recipes';

export default class FinishedMealsModel extends Model<InferAttributes<FinishedMealsModel>,
  InferCreationAttributes<FinishedMealsModel>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare mealId: number;
}

FinishedMealsModel.init({
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
  modelName: 'finished_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(FinishedMealsModel, { foreignKey: 'id'})
MealsRecipe.belongsTo(FinishedMealsModel, { foreignKey: 'idMeal'})
