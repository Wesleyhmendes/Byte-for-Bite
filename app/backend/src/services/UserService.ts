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
  
    if (!email || !password) {
      return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    }
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email) || password.length < 6) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const user = await this.userModel.findByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
  
    const payload = { sub: user.id, role: user.role, email: user.email };
  
    const secret = process.env.JWT_SECRET ?? 'jwt_secret';
  
    const token = jwt.sign(payload, secret, { expiresIn: '7d' });
  
    return { status: 'SUCCESSFUL', data: { token },
    };
  }
}