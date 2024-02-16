import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post('/', (req: Request, res: Response) => userController.login(req, res));

export default router;