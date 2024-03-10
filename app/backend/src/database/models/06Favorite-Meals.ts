import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes, 
} from 'sequelize';
import db from '.';
import MealsRecipe from './04Meals-Recipes';

export default class FavoriteMealsModel extends Model<InferAttributes<FavoriteMealsModel>,
  InferCreationAttributes<FavoriteMealsModel>> {
  declare mealId: number;
  declare userId: number;  
}
FavoriteMealsModel.init({
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
  modelName: 'favorite_meals',
  timestamps: false,
})
FavoriteMealsModel.belongsTo(MealsRecipe, { as: 'favoriteRecipes', foreignKey: 'mealId' })
 // SequelizeUsers.belongsToMany(FavoriteMealsModel, { foreignKey: 'id' })
// MealsRecipe.hasMany(FavoriteMealsModel, { as: 'favoriteRecipes', foreignKey: 'idMeal' })
