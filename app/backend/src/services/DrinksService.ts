import { ServiceResponse } from '../Interfaces/serviceReponse';
import { iDrinkRecipe } from '../Interfaces/iDrinks';
import DrinksModel from '../models/Drinks.model';

export default class MatchesService {
  constructor(
    private drinkModel = new DrinksModel(),
  ) { }

  async getDrinks() {
    const drinks = await this.drinkModel.findAll();

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drinks not found' } }
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }

  async getDrinkByName(q: string) {
    const drinks = await this.drinkModel.getFilteredDrinks(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } }
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }

  async getDrinksByFirstLetter(q: any) {
    const drinks = await this.drinkModel.getFilteredDrinks(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } }
    };

    const response = drinks.filter((drink: iDrinkRecipe) => drink.strDrink.startsWith(q)
      || drink.strDrink.startsWith(q.toUpperCase()));

    return { status: 'SUCCESSFUL', data: response };
  }

  async getDrinkByCategory(q: string) {
    const drinks = await this.drinkModel.getDrinkByCategory(q);
    return { status: 'SUCCESSFUL', data: drinks };
  }

  async getAllCategories() {
    const categories = await this.drinkModel.getCategories();
    return { status: 'SUCCESSFUL', data: categories }
  }

  async getRandomDrink(): Promise<ServiceResponse<iDrinkRecipe>> {
    const recipes = await this.drinkModel.findAll();
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length) + 1];

    return { status: 'SUCCESSFUL', data: randomRecipe };
  }

  async getAllIngredients() {
    const recipes = await this.drinkModel.getAllIngredients();

    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getByIngredients(q: string) {
    const recipes = await this.drinkModel.getByIngredients(q);

    return { status: 'SUCCESSFUL', data: recipes };
  }
}
