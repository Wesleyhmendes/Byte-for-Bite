import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFavoriteMeals } from '../../Interfaces/meals/IMeals';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavoriteMeals>>('favorite_meals', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      mealId: {
        type: DataTypes.INTEGER,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('favorite_meals');
  },
};
