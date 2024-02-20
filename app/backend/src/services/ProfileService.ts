import IUsers from '../Interfaces/IUsers';
import { ServiceResponse } from '../Interfaces/serviceReponse';
import UserModel from '../models/UserModel';

const notFound = 'Username not found';

class ProfileService {
  constructor(
    private userModel = new UserModel(),
  ) { }

  async getProfile(email: string): Promise<ServiceResponse<Omit<IUsers, 'password'>>> {
    const result = await this.userModel.findByEmail(email);
    if (!result) return this.serviceResponse(notFound);
    const { password, ...rest } = result;
    const profile = rest;   
    return { status: 'SUCCESSFUL', data: profile }
  }

  async updateProfileImage(id: number, imageUrl: string): Promise<ServiceResponse<{ message: string }>> {
    const response = await this.userModel.updateImage(id, imageUrl);

    if (response !== 1) return { status: 'NOT_FOUND', data: { message: 'ID not found!' } }

    return { status: 'SUCCESSFUL', data: { message: `Profile ID:${id} image updated!` } }
  }

  private serviceResponse(status: string): ServiceResponse<IUsers> {
    if (status === notFound) return { status: 'NOT_FOUND', data: { message: 'User not found'} }
    
    return { status: 'INVALID_DATA', data: { message: 'Invalid data' } }
  }
}

export default ProfileService;