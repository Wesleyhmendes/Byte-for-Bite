import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProgressRecipe } from '../../Interfaces/IProgress';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IProgressRecipe>>('in_progress_drinks', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      recipeId: {
        type: DataTypes.INTEGER,
      },
      markedIngredients: {
        type: DataTypes.JSON,
      }
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('in_progress_drinks');
  },
};
