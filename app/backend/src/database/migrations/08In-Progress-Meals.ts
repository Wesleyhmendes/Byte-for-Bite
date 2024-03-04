import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProgressMealRecipe } from '../../Interfaces/IProgress';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProgressMealRecipe>>('in_progress_meals', {
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
      markedIngredients: {
        type: DataTypes.JSON,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('in_progress_meals');
  },
};
