<<<<<<< HEAD
=======
import { ServiceResponse } from '../Interfaces/serviceReponse';
import { iDrinkRecipe } from '../Interfaces/iDrinks';
>>>>>>> f41362d0826f8aa44b4d6929fed5e91411a6bc72
import DrinksModel from '../models/Drinks.model';

export default class MatchesService {
  constructor(
    private drinkModel = new DrinksModel(),
  ) { }

  public async getDrinks() {
    const drinks = await this.drinkModel.findAll();

<<<<<<< HEAD
    return { status: 'SUCCESSFUL', data: drinks };
  }
=======
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

  public async getDrinkByCategory(q: string) {
    const drinks = await this.drinkModel.getDrinkByCategory(q);
    return { status: 'SUCCESSFUL', data: drinks };
  }

  async getRandomDrink(): Promise<ServiceResponse<iDrinkRecipe>> {
    const recipes = await this.drinkModel.findAll();
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length) + 1];

    return {status: 'SUCCESSFUL', data: randomRecipe};
  }
>>>>>>> f41362d0826f8aa44b4d6929fed5e91411a6bc72
}