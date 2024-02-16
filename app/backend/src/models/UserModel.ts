import IUsers from '../Interfaces/IUsers';
import SequelizeUsers from '../database/models/UserModel';
import { IUsersModel } from '../Interfaces/IUsers';

export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;

  async findByEmail(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });
    if (user == null) return null;

    return user.dataValues;
  }
}