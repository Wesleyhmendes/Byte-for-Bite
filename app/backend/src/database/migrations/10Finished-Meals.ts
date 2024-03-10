import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFinishedMeal } from '../../Interfaces/IFinished';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFinishedMeal>>('finished_meals', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('finished_meals');
  },
};
