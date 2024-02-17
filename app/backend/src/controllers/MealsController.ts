import mapStatusHTTP from "../utils/mapStatusHTTP";
import MealsService from "../services/MealsService";
import { Request, Response } from "express";

export default class MealsController {
  constructor(private mealsService = new MealsService()) {}

  async getAllMealsRecipe(req: Request, res: Response) {
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
}