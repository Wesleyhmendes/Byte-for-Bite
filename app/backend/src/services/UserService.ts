import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ServiceResponse } from '../Interfaces/serviceReponse';
import UserModel from '../models/UserModel';
import {IUsersModel} from '../Interfaces/IUsers';

type Login = { email: string, password: string };
type Token = { token: string };

export default class UserService {
  constructor(
    private userModel: IUsersModel = new UserModel(),
  ) { }

  public async verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
    const { email, password } = login;    
  
    const invalidLogin = this.validate(email, password);    

    if(invalidLogin) return invalidLogin;

    const user = await this.userModel.findByEmail(email);    

    if (!user) return this.invalidStatusResponse('invalid_password');

    const invalidPassword = await this.checkPassword(password, user.password);

    if (invalidPassword) return invalidPassword as ServiceResponse<Token>;
    // if (!await bcrypt.compare(password, user.password)) return this.invalidStatusResponse('invalid_password');
  
    const token = this.tokenBuilder(user.id, user.role, user.email);    
  
    return { status: 'SUCCESSFUL', data: { token },
    };
  }

  private validate(email: string, password: string) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !password) return this.invalidStatusResponse('invalid_data');

    if (!validEmail.test(email)) return this.invalidStatusResponse('invalid_emailOrPassword');

    if (password.length < 6) return this.invalidStatusResponse('invalid_emailOrPassword');

    return false;
  }

  private async checkPassword(password: string, userPassword: string) {
    const match = await bcrypt.compare(password, userPassword);
    if (!match) return this.invalidStatusResponse('invalid_password');

    return false;
  }

  private invalidStatusResponse(status: string): ServiceResponse<Token> {
    if (status === 'invalid_data') return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    if (status === 'invalid_emailOrPassword') return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };

    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };    
  }

  private tokenBuilder(sub: number, role: string, email: string) {
    const payload = { sub, role, email };
  
    const secret = process.env.JWT_SECRET ?? 'jwt_secret';
  
    const token = jwt.sign(payload, secret, { expiresIn: '7d' });

    return token;
  }
}