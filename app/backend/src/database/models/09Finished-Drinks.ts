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

export default class FinishedDrinksModel extends Model<InferAttributes<FinishedDrinksModel>,
  InferCreationAttributes<FinishedDrinksModel>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare drinkId: number;
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
  drinkId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'drinks_recipes',
      key: 'idMeal'
    }
  },
}, {
  sequelize: db,
  modelName: 'finished_drinks',
  timestamps: false,
})

SequelizeUsers.belongsTo(FinishedDrinksModel, {as: 'userId', foreignKey: 'id'})
DrinksRecipes.belongsTo(FinishedDrinksModel, {as: 'drinkId', foreignKey: 'idDrink'})
