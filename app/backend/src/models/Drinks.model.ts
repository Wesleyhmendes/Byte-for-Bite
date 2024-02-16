import SequelizeDrinks from '../database/models/Drinks-Recipes.model';
import { IDrinkModel, iDrinkRecipe } from '../Interfaces/iDrinks';

export default class DrinksModel implements IDrinkModel {
  private model = SequelizeDrinks;

  async findAll(): Promise<iDrinkRecipe[] | null> {
    const dbResponse = await this.model.findAll();

    if (!dbResponse) return null;

    return dbResponse;
  }
}
