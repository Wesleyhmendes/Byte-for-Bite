import { Ingredients } from "../Interfaces/Ingredients";
import IAreaType from "../Interfaces/IAreaType";
import IMealsCategory from "../Interfaces/iCategory";
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

  async getRandomRecipe(): Promise<ServiceResponse<IMealRecipes>> {
    const recipes = await this.mealsModel.findAll();
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length) + 1];
    return {status: 'SUCCESSFUL', data: randomRecipe};  
  }

  async getAllCategories(): Promise<ServiceResponse<IMealsCategory[]>> {
    const categories = await this.mealsModel.findAllCategories();
    return {status: 'SUCCESSFUL', data: categories};
  }

  async getAllAreas(): Promise<ServiceResponse<IAreaType[]>> {
    const areas = await this.mealsModel.findAllAreas();
    return {status: 'SUCCESSFUL', data: areas}
  }

  async getByCategory(category: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findRecipeByCategory(category);
    return {status: 'SUCCESSFUL', data: recipes};
  }

  async getByArea(area: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findRecipeByArea(area);
    return {status: 'SUCCESSFUL', data: recipes};
  }

  async getAllIngredients(): Promise<ServiceResponse<Ingredients>> {
    const ingredients = await this.mealsModel.findAllIngredients();
    return {status: 'SUCCESSFUL', data: {ingredients}}
  }

  async getByIngredient(ingredient: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByIngredient(ingredient);
    return {status: 'SUCCESSFUL', data: recipes};
  }

  async getRecipeById(id: number): Promise<ServiceResponse<IMealRecipes>>{
    const recipe = await this.mealsModel.findRecipeById(id);
    if(!recipe) {
      return {status: 'NOT_FOUND', data: {message: 'Food not found'}};
    }
    return {status: 'SUCCESSFUL', data: recipe};
  }
}