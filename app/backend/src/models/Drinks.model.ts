import { Op } from 'sequelize';
import SequelizeDrinks from '../database/models/Drinks-Recipes.model';
import { IDrinkModel, iDrinkRecipe } from '../Interfaces/iDrinks';

export default class DrinksModel implements IDrinkModel {
  private model = SequelizeDrinks;

  async findAll(): Promise<iDrinkRecipe[] | null> {
    const dbResponse = await this.model.findAll();

    if (!dbResponse) return null;

    return dbResponse;
  }

  async getFilteredDrinks(q: any): Promise<iDrinkRecipe[] | null> {
    const dbResponse = await this.model.findAll({ where: {
      strDrink: {
        [Op.like]: `%${q}%`
      }
    }});

    if (!dbResponse) return null;

    return dbResponse;
  }

  async getDrinkByCategory(q: number): Promise<iDrinkRecipe[] | null> {
    const dbResponse = await this.model.findAll({
      where: {
        strCategory: q
      },
    });
    if (!dbResponse) return null;
    return dbResponse;
  }
}
