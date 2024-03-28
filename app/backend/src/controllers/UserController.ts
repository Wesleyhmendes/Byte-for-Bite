import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private userService: UserService,
  ) { }

  public async login(req: Request, res: Response) {
    const { data, status } = await this.userService.verifyLogin(req.body);
    const httpStatus = mapStatusHTTP(status);

    return res.status(httpStatus).json(data);
  }

  async createNewUser(req: Request, res: Response) {
    const newUser = req.body;
    const { data, status } = await this.userService.createNewUser(newUser);
    
    const httpStatus = mapStatusHTTP(status);

    return res.status(httpStatus).json(data);
  }

  async createNewGoogleUser(req: Request, res: Response) {
    const newUser = req.body;
    console.log(newUser);
    const { data, status } = await this.userService.createGoogleUser(newUser);
    
    const httpStatus = mapStatusHTTP(status);

    return res.status(httpStatus).json(data);
  }
}