import { Router } from "express";
import { Request, Response } from "express";
import MealsController from "../controllers/MealsController";

const mealsRouter = Router();
const mealsController = new MealsController();

mealsRouter.get('/name', (req: Request, res: Response) => mealsController.getAllMealsRecipe(req, res));

export default mealsRouter;