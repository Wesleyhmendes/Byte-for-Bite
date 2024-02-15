import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Example extends Model<InferAttributes<Example>,
InferCreationAttributes<Example>> {
  declare id: CreationOptional<number>;
}

Example.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize: db,
  modelName: 'trybeEval',
  timestamps: false,
});

export default Example;