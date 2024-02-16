import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/drink.controller';

const drinkController = new DrinkController();

const router = Router();

router.get('/', (req: Request, res: Response) => drinkController.getDrinks(req, res));

export default router;
