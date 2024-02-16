import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class DrinksCategories extends Model<InferAttributes<DrinksCategories>,
InferCreationAttributes<DrinksCategories>> {
  declare idCategory: CreationOptional<number>;
  declare strCategory: string
}

DrinksCategories.init({
  idCategory: {
    type: DataTypes.INTEGER,
  },
  strCategory: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'DrinksCategories',
  timestamps: false,
});

export default DrinksCategories;