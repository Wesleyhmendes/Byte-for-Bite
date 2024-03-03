import IUsers from '../Interfaces/IUsers';
import SequelizeUsers from '../database/models/00UserModel';
import { IUsersModel } from '../Interfaces/IUsers';


export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;

  async createUser(newUser: Omit<IUsers, 'id'>): Promise<IUsers>{
    const { dataValues } = await this.model.create(newUser)

    return dataValues;
  }

  async findByEmail(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });    
    if (user === null) return null;

    return user.dataValues;
  }
  
  async findByUsername(username: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { username } });    

    if (user === null) return null;

    return user.dataValues; 
  }

  async updateImage(id: number, imageUrl: string): Promise<number | null> {
    const rowCount = await this.model.update({ profileImage: imageUrl }, {
      where: { id },
    })
    if (rowCount[0] === 0) return null;

    return rowCount[0];
  }
}