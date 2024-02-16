import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import DrinkService from '../services/DrinksService';

export default class MatchesController {
  constructor(
    private drinkService = new DrinkService(),
  ) { }

  public async getDrinks(req: Request, res: Response) {
    const { status, data } = await this.drinkService.getDrinks();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getFilteredDrinks(req: Request, res: Response) {
    const q = req.query.q;
    const { status, data } = await this.drinkService.getFilteredDrinks(q);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinksByFirstLetter(req: Request, res: Response) {
    const q = req.query.q;
    const { status, data } = await this.drinkService.getDrinksByFirstLetter(q);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinkByCategory(req: Request, res: Response) {
    const q = req.query.q;
    const { status, data } = await this.drinkService.getDrinkByCategory(Number(q));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
