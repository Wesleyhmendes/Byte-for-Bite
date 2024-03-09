import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import SequelizeUsers from './00UserModel';
import MealsRecipe from './04Meals-Recipes';

export default class FinishedMealsModel extends Model<InferAttributes<FinishedMealsModel>,
  InferCreationAttributes<FinishedMealsModel>> {
    declare mealId: number;
    declare userId: number;  
}

FinishedMealsModel.init({
  mealId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    references:{
      model: 'meals_recipes',
      key: 'idMeal'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id'
    }
  }, 
}, {
  sequelize: db,
  modelName: 'finished_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(FinishedMealsModel, { foreignKey: 'id'})
MealsRecipe.belongsTo(FinishedMealsModel, { foreignKey: 'idMeal'})
