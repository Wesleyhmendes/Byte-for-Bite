import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/DrinksController';
import Authorization from '../middlewares/auth.middlware';

const drinkController = new DrinkController();

const drinksRouter = Router();

drinksRouter.get(
  '/name',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getAllDrinks(req, res)
);

drinksRouter.get(
  '/letter',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getDrinksByFirstLetter(req, res)
);

drinksRouter.get(
  '/category',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getDrinkByCategory(req, res)
);

drinksRouter.get(
  '/categories',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getAllCategories(req, res)
);

drinksRouter.get(
  '/random',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getRandomDrink(req, res)
);

drinksRouter.get(
  '/ingredients',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getAllIngredients(req, res)
);

drinksRouter.get(
  '/ingredient',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getByIngredient(req, res)
);

drinksRouter.get(
  '/:id',
  Authorization.auth,
  (req: Request, res: Response) => drinkController.getById(req, res)
);

drinksRouter.post(
  '/inprogress',
  (req: Request, res: Response) => drinkController.addDrinkInProgress(req, res)
)


export default drinksRouter;
