import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import DrinkService from '../services/DrinksService';

export default class DrinksController {
  constructor(
    private drinkService = new DrinkService(),
  ) { }

  public async getAllDrinks(req: Request, res: Response) {
    const { q } = req.query;
    if (!q) {
      const { status, data } = await this.drinkService.getDrinks();
      return res.status(mapStatusHTTP(status)).json(data);
    }

    const { status, data } = await this.drinkService.getDrinkByName(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  } 

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.drinkService.getById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinksByFirstLetter(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.drinkService.getDrinksByFirstLetter(q as string);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getAllCategories(_req: Request, res: Response) {
    const { status, data } = await this.drinkService.getAllCategories();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getDrinkByCategory(req: Request, res: Response) {
    const { q } = req.query;
    const { status, data } = await this.drinkService.getDrinkByCategory(q as string);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getRandomDrink(req: Request, res: Response) {
    const { status, data } = await this.drinkService.getRandomDrink();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async getByIngredient(req: Request, res: Response) {
    const { q } = req.query;    
      const { status, data } = await this.drinkService.getByIngredients(q as string);
      return res.status(mapStatusHTTP(status)).json(data);    
  }
  
  public async getAllIngredients(_req: Request, res: Response) {    
    const { status, data } = await this.drinkService.getAllIngredients();
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async addDrinkInProgress(req: Request, res: Response) {
    const inProgress = req.body;
    const { status, data } = await this.drinkService.addDrinkInProgress(inProgress);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async findRecipeInProgressById(req: Request, res: Response) {
    const { id } = req.params;
    const { user } = req.query;
    const { status, data } = await this.drinkService.findRecipeInProgressById({
      userId: Number(user as string),
      drinkId: Number(id),
    });
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
