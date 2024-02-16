import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class MealsCategories extends Model<InferAttributes<MealsCategories>,
InferCreationAttributes<MealsCategories>> {
  declare idCategory: CreationOptional<number>;
  declare strCategory: string;
  declare strCategoryThumb: string;
  declare strCategoryDescription: string;

}

MealsCategories.init({
  idCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING,
  },
  strCategoryThumb: {
    type: DataTypes.STRING,
  },
  strCategoryDescription: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'MealsCategories',
  timestamps: false,
});

export default MealsCategories;