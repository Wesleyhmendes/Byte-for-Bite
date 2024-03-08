import mapStatusHTTP from "../utils/mapStatusHTTP";
import MealsService from "../services/MealsService";
import { Request, Response } from "express";

export default class MealsController {
  constructor(private mealsService = new MealsService()) {}

  async getAllMealsRecipe(req: Request, res: Response) {
    const token = req.headers.authorization    
    const {q} = req.query;
    if(q) {
      const {status, data} = await this.mealsService.getRecipeByName(q as string);
      return res.status(mapStatusHTTP(status)).json(data);
    }
    const {status, data} = await this.mealsService.getAllMealsRecipe();
    return res.status(mapStatusHTTP(status)).json(data);
  };

  async getByFirstLetter(req: Request, res: Response) {
    const {q} = req.query;
    const {status, data} = await this.mealsService.getByFirstLetter(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  };

  async getRandomRecipe(_req: Request, res: Response) {
    const {status, data} = await this.mealsService.getRandomRecipe();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getAllCategories(_req: Request, res: Response) {
    const {status, data} = await this.mealsService.getAllCategories();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getAllAreas(_req: Request, res: Response) {
    const {status, data} = await this.mealsService.getAllAreas();
    return res.status(mapStatusHTTP(status)).json(data);
  }
  
  async getRecipeByCategory(req: Request, res: Response) {
    const {q} = req.query;
    const {status, data} = await this.mealsService.getByCategory(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getRecipeByArea(req: Request, res: Response) {
    const {q} = req.query;
    const{status, data} = await this.mealsService.getByArea(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getAllIngredients(req: Request, res: Response) {
    const{status, data} = await this.mealsService.getAllIngredients();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getByIngredient(req: Request, res: Response) {
    const {q} = req.query;
    const {status, data} = await this.mealsService.getByIngredient(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async getById(req: Request, res: Response) {
    const {id} = req.params;    
    const {status, data} = await this.mealsService.getRecipeById(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async addRecipeInProgress(req: Request, res: Response) {
    const inProgress = req.body;
    const { status, data } = await this.mealsService.addRecipeInProgress(inProgress);    
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async findRecipeInProgressById(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = req.query;
    const { status, data } = await this.mealsService.findRecipeInProgressById({
      userId: Number(user as string),
      mealId: Number(id),
    });
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async updateRecipeInProgressById(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = req.query;
    const { markedIngredients } = req.body;    
    const { status, data } = await this.mealsService.updateRecipeInProgressById({
      userId: Number(user as string),
      mealId: Number(id),
      markedIngredients,
    })
    return res.status(mapStatusHTTP(status)).json(data);
  }

  async favoriteMealRecipe(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } = req.body
    const { status, data } = await this.mealsService.favoriteMealRecipe(userId, Number(id));
    
    return res.status(mapStatusHTTP(status)).json(data);
  }
}