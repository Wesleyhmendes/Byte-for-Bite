import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRecipeStatus } from '../../Interfaces/IRecipeStatus';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRecipeStatus>>('favorite_drinks', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('favorite_drinks');
  },
};
