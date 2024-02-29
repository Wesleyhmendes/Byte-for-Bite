import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/DrinksController';

const drinkController = new DrinkController();

const router = Router();

router.get('/', (req: Request, res: Response) => drinkController.getDrinks(req, res));
router.get('/name', (req: Request, res: Response) => drinkController.getFilteredDrinks(req, res));
router.get('/letter', (req: Request, res: Response) => drinkController.getDrinksByFirstLetter(req, res));
router.get('/category', (req: Request, res: Response) => drinkController.getDrinkByCategory(req, res));
router.get('/random', (req: Request, res: Response) => drinkController.getRandomDrink(req, res));
router.get('/ingredients', (req: Request, res: Response) => drinkController.getAllIngredients(req, res));
router.get('/ingredient', (req: Request, res: Response) => drinkController.getByIngredient(req, res));

export default router;
