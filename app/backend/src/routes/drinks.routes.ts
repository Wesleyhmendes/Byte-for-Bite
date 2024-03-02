import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/DrinksController';

const drinkController = new DrinkController();

const drinksRouter = Router();

drinksRouter.get('/name', (req: Request, res: Response) => drinkController.getAllDrinks(req, res));
drinksRouter.get('/letter', (req: Request, res: Response) => drinkController.getDrinksByFirstLetter(req, res));
drinksRouter.get('/category', (req: Request, res: Response) => drinkController.getDrinkByCategory(req, res));
drinksRouter.get('/categories', (req: Request, res: Response) => drinkController.getAllCategories(req, res));
drinksRouter.get('/random', (req: Request, res: Response) => drinkController.getRandomDrink(req, res));
drinksRouter.get('/ingredients', (req: Request, res: Response) => drinkController.getAllIngredients(req, res));
drinksRouter.get('/ingredient', (req: Request, res: Response) => drinkController.getByIngredient(req, res));

export default drinksRouter;
