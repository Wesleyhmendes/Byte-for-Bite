import DrinksModel from '../models/Drinks.model';

export default class MatchesService {
  constructor(
    private drinkModel = new DrinksModel(),
  ) { }

  public async getDrinks() {
    const drinks = await this.drinkModel.findAll();

    return { status: 'SUCCESSFUL', data: drinks };
  }
}