import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ServiceResponse } from '../Interfaces/serviceReponse';
import { Token } from '../Interfaces/Login';

class UserValidation {
  
  validate(email: string, password: string) {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !password) return this.invalidStatusResponse('invalid_data');

    if (!validEmail.test(email)) return this.invalidStatusResponse('invalid_emailOrPassword');

    if (password.length < 6) return this.invalidStatusResponse('invalid_emailOrPassword');

    return false;
  }

  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  }

  async checkPassword(password: string, userPassword: string) {
    const match = await bcrypt.compare(password, userPassword);
    if (!match) return this.invalidStatusResponse('invalid_password');

    return false;
  }

  invalidStatusResponse(status: string): ServiceResponse<Token> {
    if (status === 'invalid_data') return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    if (status === 'invalid_emailOrPassword') return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    if (status === 'email_exists') return { status: 'INVALID_DATA', data: { message: 'Email already exists' } };
    if (status === 'username_exists') return { status: 'INVALID_DATA', data: { message: 'Username already exists' } };


    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };    
  }

  tokenBuilder(sub: number, role: string, email: string): Token {
    const payload = { sub, role, email };
  
    const secret = process.env.JWT_SECRET ?? 'jwt_secret';
  
    const token = jwt.sign(payload, secret, { expiresIn: '7d' });

    return { token };
  }
}

export default UserValidation;