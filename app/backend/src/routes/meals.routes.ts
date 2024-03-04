import { Router } from "express";
import { Request, Response } from "express";
import MealsController from "../controllers/MealsController";
import Authorization from '../middlewares/auth.middlware';

const mealsRouter = Router();
const mealsController = new MealsController();

mealsRouter.get(
  '/name',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getAllMealsRecipe(req, res)
);

mealsRouter.get(
  '/letter',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getByFirstLetter(req, res)
);

mealsRouter.get(
  '/random',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getRandomRecipe(req, res)
);

mealsRouter.get(
  '/categories',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getAllCategories(req, res)
);

mealsRouter.get(
  '/areas',
  Authorization.auth,
  (req:Request, res: Response) => mealsController.getAllAreas(req,res)
);

mealsRouter.get(
  '/category',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getRecipeByCategory(req, res)
);

mealsRouter.get(
  '/area',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getRecipeByArea(req, res)
);

mealsRouter.get(
  '/ingredients',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getAllIngredients(req, res)
);

mealsRouter.get(
  '/ingredient',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getByIngredient(req, res)
);

mealsRouter.get(
  '/:id',
  Authorization.auth,
  (req: Request, res: Response) => mealsController.getById(req, res)
);


export default mealsRouter;