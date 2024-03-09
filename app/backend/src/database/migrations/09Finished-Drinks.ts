import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFinishedDrink } from '../../Interfaces/IFinished';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFinishedDrink>>('finished_drinks', {
      drinkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        references:{
          model: 'drinks_recipes',
          key: 'idDrink'
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
    return queryInterface.dropTable('finished_drinks');
  },
};
