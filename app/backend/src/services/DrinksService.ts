import { iDrinkRecipe } from '../Interfaces/iDrinks';
import DrinksModel from '../models/Drinks.model';

export default class MatchesService {
  constructor(
    private drinkModel = new DrinksModel(),
  ) { }

  public async getDrinks() {
    const drinks = await this.drinkModel.findAll();

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drinks not found' } } 
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }

  public async getFilteredDrinks(q: any) {
    const drinks = await this.drinkModel.getFilteredDrinks(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } } 
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }

  public async getDrinksByFirstLetter(q: any) {
    const drinks = await this.drinkModel.getFilteredDrinks(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } } 
    };

    const response = drinks.filter((drink: iDrinkRecipe) => drink.strDrink.startsWith(q)
    || drink.strDrink.startsWith(q.toUpperCase()));

    return { status: 'SUCCESSFUL', data: response };
  }

  public async getDrinkByCategory(q: number) {
    const drinks = await this.drinkModel.getDrinkByCategory(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } } 
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }
}