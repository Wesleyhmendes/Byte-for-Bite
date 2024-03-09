import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFavoriteDrink } from '../../Interfaces/IFavorite';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavoriteDrink>>('favorite_drinks', {
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
    return queryInterface.dropTable('favorite_drinks');
  },
};
