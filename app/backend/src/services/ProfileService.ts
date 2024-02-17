import IUsers, { IUsersModel } from '../Interfaces/IUsers';
import UserModel from '../models/UserModel';

const notFound = 'Email not found';
const successfull = 'Success!'

class ProfileService {
  constructor(
    private userModel = new UserModel(),
  ) { }

  async getProfile(username: string) {
    const result = await this.userModel.findByUsername(username);
    if (!result) return this.serviceResponse(notFound);
    const { password, email, ...rest } = result;
    const profile = rest;   
    return { status: 200, data: profile }
  }

  private serviceResponse(status: string) {
    if (status === notFound) return { status: 404, data: {message: notFound} }
    
    return { status: 200, data: { message: successfull } }
  }
}

export default ProfileService;