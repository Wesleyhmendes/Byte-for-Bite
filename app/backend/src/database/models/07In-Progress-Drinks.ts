import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import DrinksRecipes from './03Drinks-Recipes.model';
import SequelizeUsers from './00UserModel';
import { DrinkMarkedIngredients } from '../../Interfaces/MarkedIngredients';

export default class InProgressDrinksModel extends Model<InferAttributes<InProgressDrinksModel>,
  InferCreationAttributes<InProgressDrinksModel>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare drinkId: number;
  declare markedIngredients: DrinkMarkedIngredients;
}

InProgressDrinksModel.init({
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
  drinkId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drinks_recipes',
      key: 'idDrink'
    }
  },
  markedIngredients: {
    type: DataTypes.JSON
  }
}, {
  sequelize: db,
  modelName: 'in_progress_drinks',
  timestamps: false,
})

SequelizeUsers.belongsTo(InProgressDrinksModel, {as: 'userId', foreignKey: 'id'})
DrinksRecipes.belongsTo(InProgressDrinksModel, {as: 'drinkId', foreignKey: 'idDrink'})
