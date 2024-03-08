import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFavorite } from '../../Interfaces/IFavorite';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFavorite>>('favorite_drinks', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      favoriteRecipes: {
        type: DataTypes.JSON,
        allowNull: false,        
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('favorite_drinks');
  },
};
