import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';
import DrinksRecipes from './03Drinks-Recipes.model';

export default class FavoriteDrinksModel extends Model<InferAttributes<FavoriteDrinksModel>,
  InferCreationAttributes<FavoriteDrinksModel>> {
  declare drinkId: number;
  declare userId: number;
}

FavoriteDrinksModel.init({
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
  modelName: 'favorite_drinks',
  timestamps: false,
})

FavoriteDrinksModel.belongsTo(DrinksRecipes, { as: 'favoriteRecipes', foreignKey: 'drinkId' })
// SequelizeUsers.belongsTo(FavoriteDrinksModel, {as: 'userId', foreignKey: 'id'})
// DrinksRecipes.belongsTo(FavoriteDrinksModel, {as: 'drinkId', foreignKey: 'idDrink'})
