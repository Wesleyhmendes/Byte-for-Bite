import mapStatusHTTP from "../utils/mapStatusHTTP";
import MealsService from "../services/MealsService";
import { Request, Response } from "express";

export default class MealsController {
  constructor(private mealsService = new MealsService()) {}

  async getAllMealsRecipe(req: Request, res: Response) {
    const {status, data} = await this.mealsService.getAllMealsRecipe();
    return res.status(mapStatusHTTP(status)).json(data);
  }
}