import IMealRecipes from "../Interfaces/IMealRecipes";
import { ServiceResponse } from "../Interfaces/serviceReponse";
import MealsModel from "../models/MealsModel";

export default class MealsService {
  constructor(
    private mealsModel = new MealsModel(),
  ) {}
  async getAllMealsRecipe():Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findAll();
    return {status: 'SUCCESSFUL', data: recipes};
  }
  async getRecipeByName(name: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByName(name);
    return{status: 'SUCCESSFUL', data: recipes};
  }
  async getByFirstLetter(letter: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByFirstLetter(letter);
    return {status: 'SUCCESSFUL', data: recipes};
  }
}