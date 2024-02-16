import { Op } from "sequelize";
import IMealRecipes from "../Interfaces/IMealRecipes";
import { IMealsRecipesModel } from "../Interfaces/meals/IMealsRecipesModel";
import MealsRecipe from "../database/models/Meals-Recipes";

export default class MealsModel implements IMealsRecipesModel {
  private mealsModel = MealsRecipe;
  
  async findAll(): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll();
    return recipes;
  }

  async findByName(name: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({where: {
      strMeal: {
        [Op.like]: `%${name}%`
      }
    }})
  return recipes;
  };

  async findByFirstLetter(letter: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`
        }
      }
    })
    return recipes
  }
}