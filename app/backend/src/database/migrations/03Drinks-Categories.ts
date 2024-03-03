import { Model, QueryInterface, DataTypes } from 'sequelize';
import { iDrinkCategories } from '../../Interfaces/drinks/iDrinks';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<iDrinkCategories>>('drinks_categories', {
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strCategory: {
        type: DataTypes.STRING,
      }, 
    })},
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('drinks_categories')
    }};
