import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import DrinksRecipes from './03Drinks-Recipes.model';

export default class FinishedDrinksModel extends Model<InferAttributes<FinishedDrinksModel>,
  InferCreationAttributes<FinishedDrinksModel>> {
    declare drinkId: number;
    declare userId: number;
}

FinishedDrinksModel.init({
  drinkId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    references:{
      model: 'drinks_recipes',
      key: 'idDrink'
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
  modelName: 'finished_drinks',
  timestamps: false,
})

FinishedDrinksModel.belongsTo(DrinksRecipes, { as: 'finishedRecipes', foreignKey: 'drinkId' })
// SequelizeUsers.belongsTo(FinishedDrinksModel, { foreignKey: 'id'})
// DrinksRecipes.belongsTo(FinishedDrinksModel, { foreignKey: 'idDrink'})
