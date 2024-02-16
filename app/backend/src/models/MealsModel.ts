import IMealRecipes from "../Interfaces/IMealRecipes";
import { IMealsRecipesModel } from "../Interfaces/meals/IMealsRecipesModel";
import MealsRecipe from "../database/models/Meals-Recipes";

export default class MealsModel implements IMealsRecipesModel {
  private mealsModel = MealsRecipe;
  
  async findAll(): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll();
    return recipes;
  }
}