import { Model, QueryInterface, DataTypes } from 'sequelize';
import { iDrinkCategories } from '../../Interfaces/iDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<iDrinkCategories>>('drinks_recipes', {
      idCategory: {
        type: DataTypes.INTEGER,
      },
      strCategory: {
        type: DataTypes.STRING,
      },
    })}};
