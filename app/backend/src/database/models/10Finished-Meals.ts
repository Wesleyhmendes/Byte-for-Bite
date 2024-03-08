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
import { IMealID } from '../../Interfaces/meals/IMealID';

export default class FinishedMealsModel extends Model<InferAttributes<FinishedMealsModel>,
  InferCreationAttributes<FinishedMealsModel>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare finishedRecipes: IMealID[];
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
  finishedRecipes: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'finished_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(FinishedMealsModel, { foreignKey: 'id'})
MealsRecipe.belongsTo(FinishedMealsModel, { foreignKey: 'idMeal'})
