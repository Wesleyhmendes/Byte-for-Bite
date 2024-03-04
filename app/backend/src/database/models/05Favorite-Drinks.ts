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

export default class FavoriteDrinksModel extends Model<InferAttributes<FavoriteDrinksModel>,
  InferCreationAttributes<FavoriteDrinksModel>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare drinkId: number;
}

FavoriteDrinksModel.init({
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
}, {
  sequelize: db,
  modelName: 'favorite_drinks',
  timestamps: false,
})

SequelizeUsers.belongsTo(FavoriteDrinksModel, {as: 'userId', foreignKey: 'id'})
DrinksRecipes.belongsTo(FavoriteDrinksModel, {as: 'drinkId', foreignKey: 'idDrink'})
