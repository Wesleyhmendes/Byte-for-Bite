import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFinished } from '../../Interfaces/IFinished';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFinished>>('finished_drinks', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      finishedRecipes: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('finished_drinks');
  },
};
