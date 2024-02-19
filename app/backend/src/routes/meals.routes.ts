import { Router } from "express";
import { Request, Response } from "express";
import MealsController from "../controllers/MealsController";

const mealsRouter = Router();
const mealsController = new MealsController();

mealsRouter.get('/name', (req: Request, res: Response) => mealsController.getAllMealsRecipe(req, res));
mealsRouter.get('/letter', (req: Request, res: Response) => mealsController.getByFirstLetter(req, res));
mealsRouter.get('/random', (req: Request, res: Response) => mealsController.getRandomRecipe(req, res));
mealsRouter.get('/categories', (req: Request, res: Response) => mealsController.getAllCategories(req, res));
mealsRouter.get('/areas', (req:Request, res: Response) => mealsController.getAllAreas(req,res));
mealsRouter.get('/category', (req: Request, res: Response) => mealsController.getRecipeByCategory(req, res));
mealsRouter.get('/area', (req: Request, res: Response) => mealsController.getRecipeByArea(req, res));
mealsRouter.get('/ingredients', (req: Request, res: Response) => mealsController.getAllIngredients(req, res));
mealsRouter.get('/ingredient', (req: Request, res: Response) => mealsController.getByIngredient(req, res))

export default mealsRouter;