import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeUsers from './00UserModel';
import { MealMarkedIngredients } from '../../Interfaces/MarkedIngredients';
import MealsRecipe from './04Meals-Recipes';

export default class InProgressMealsModel extends Model<InferAttributes<InProgressMealsModel>,
  InferCreationAttributes<InProgressMealsModel>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare mealId: number;
  declare markedIngredients: MealMarkedIngredients;
}

InProgressMealsModel.init({
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
  markedIngredients: {
    type: DataTypes.JSON
  }
}, {
  sequelize: db,
  modelName: 'in_progress_meals',
  timestamps: false,
})

SequelizeUsers.belongsTo(InProgressMealsModel, { foreignKey: 'userid'})
MealsRecipe.belongsTo(InProgressMealsModel, {foreignKey: 'mealId'})
