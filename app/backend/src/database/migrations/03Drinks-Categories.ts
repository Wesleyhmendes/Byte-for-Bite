import { Model, QueryInterface, DataTypes } from 'sequelize';
import { iDrinkCategories } from '../../Interfaces/iDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<iDrinkCategories>>('drinks_categories', {
      idCategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      strCategory: {
        type: DataTypes.STRING,
      },
  
    })},
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('drinks_categories')
    }};
