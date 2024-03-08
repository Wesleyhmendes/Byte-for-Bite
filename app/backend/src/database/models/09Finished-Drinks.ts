import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeUsers from './00UserModel';
import DrinksRecipes from './03Drinks-Recipes.model';
import { IDrinkID } from '../../Interfaces/drinks/IDrinkID';

export default class FinishedDrinksModel extends Model<InferAttributes<FinishedDrinksModel>,
  InferCreationAttributes<FinishedDrinksModel>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare finishedRecipes: IDrinkID[];
}

FinishedDrinksModel.init({
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
  modelName: 'finished_drinks',
  timestamps: false,
})

SequelizeUsers.belongsTo(FinishedDrinksModel, { foreignKey: 'id'})
DrinksRecipes.belongsTo(FinishedDrinksModel, { foreignKey: 'idDrink'})
