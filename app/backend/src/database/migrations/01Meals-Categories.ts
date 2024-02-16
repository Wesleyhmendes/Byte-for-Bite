import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMealsCategory from '../../Interfaces/iCategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMealsCategory>>('meals_categories', {
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strCategory: {
        type: DataTypes.STRING,
      },
      strCategoryThumb: {
        type: DataTypes.STRING,
      },
      strCategoryDescription: {
        type: DataTypes.STRING(1000),
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals_categories');
  },
};