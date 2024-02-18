import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import DrinkService from '../services/DrinksService';

export default class MatchesController {
  constructor(
    private drinkService = new DrinkService(),
  ) { }

  public async getDrinks(req: Request, res: Response) {
    const { status, data } = await this.drinkService.getDrinks();

    return res.status(200).json({ teste: "teste" });
  }
}
