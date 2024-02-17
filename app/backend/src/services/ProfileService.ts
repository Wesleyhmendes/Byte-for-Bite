import { IUsersModel } from '../Interfaces/IUsers';
import UserModel from '../models/UserModel';

class ProfileService {
  constructor(
    private userModel: IUsersModel = new UserModel(),
  ) { }

  async getProfile(email: string) {
    const profile = await this.userModel.findByEmail(email);
    return profile
  }
}

export default ProfileService;