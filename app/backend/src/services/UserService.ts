import { ServiceResponse } from '../Interfaces/serviceReponse';
import UserModel from '../models/UserModel';
import IUsers, {IUsersModel, IGUsers} from '../Interfaces/IUsers';
import { Token, Login } from '../Interfaces/Login';
import UserValidation from '../utils/userValidation';

export default class UserService {
  constructor(
    private userModel: IUsersModel = new UserModel(),
    private userValidation = new UserValidation()
  ) { }

  public async verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
    const { email, password } = login;   
     
    const invalidLogin = this.userValidation.validate(email, password);     

    if(invalidLogin) return invalidLogin;
    
    const user = await this.userModel.findByEmail(email);
    
    if (!user) return this.userValidation.invalidStatusResponse('invalid_password');

    const invalidPassword = await this.userValidation.checkPassword(password, user.password);

    if (invalidPassword) return invalidPassword as ServiceResponse<Token>;    
  
    const token = this.userValidation.tokenBuilder(user.id, user.role, user.email);
  
    return { status: 'SUCCESSFUL', data: token };
  }

  public async verifyGoogleLogin(login: IGUsers): Promise<ServiceResponse<Token>> {
    const { email, username, emailVerified, profileImage } = login;
    if (emailVerified === 'false') return this.userValidation.invalidStatusResponse('invalid_data');

    const user = await this.userModel.findByEmail(email);

    if (!user) {
      const create = await this.createGoogleUser({
        username,
        profileImage,
        email,
        emailVerified,
      });
      return create;
    }

    const token = this.userValidation.tokenBuilder(user.id, user.role, user.email);

    return { status: 'SUCCESSFUL', data: token };
  }

  async createNewUser(
    newUser: Omit<IUsers, 'role' | 'profileImage'>
    ): Promise<ServiceResponse<Token>> {

    const { email, password, username } = newUser;
    const invalidData = this.userValidation.validate(email, password);

    if (invalidData) return invalidData;

    const emailExists = await this.userModel.findByEmail(email);

    if (emailExists) return this.userValidation.invalidStatusResponse('email_exists');

    const usernameExists = await this.userModel.findByUsername(username);

    if (usernameExists) return this.userValidation.invalidStatusResponse('username_exists');

    const hashedPassword = await this.userValidation.encryptPassword(password);

    const encryptedUser = { ...newUser, role: 'user', profileImage: '', password: hashedPassword }

    const userInfo = (await this.userModel.createUser(encryptedUser));

    const token = this.userValidation.tokenBuilder(userInfo.id, userInfo.role, userInfo.email);

    return { status: 'CREATED', data: token };
  }

  async createGoogleUser(newUser: Omit<IGUsers, 'role' | 'id'>): Promise<ServiceResponse<Token>> {
    const { email, username, profileImage, emailVerified } = newUser;

    if (emailVerified === 'false') return this.userValidation.invalidStatusResponse('invalid_emailOrPassword');

    const user = await this.userModel.findByEmail(email);
    if (user) return this.userValidation.invalidStatusResponse('email_exists');

    const userInfo = (await this.userModel.createGoogleUser({
      email,
      username,
      profileImage,
      role: 'user',
    }));

    const token = this.userValidation.tokenBuilder(userInfo.id, userInfo.role, userInfo.email);

    return { status: 'CREATED', data: token };
  }
}