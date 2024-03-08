import { Ingredients } from "../Interfaces/Ingredients";
import IAreaType from "../Interfaces/IAreaType";
import IMealsCategory from "../Interfaces/iCategory";
import IMealRecipes from "../Interfaces/meals/IMealRecipes";
import { ServiceResponse } from "../Interfaces/serviceReponse";
import MealsModel from "../models/MealsModel";
import { IProgressMealRecipe } from '../Interfaces/IProgress';

export default class MealsService {
  constructor(private mealsModel = new MealsModel()) {}

  async getAllMealsRecipe(): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findAll();
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getRecipeByName(
    name: string
  ): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByName(name);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getByFirstLetter(
    letter: string
  ): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByFirstLetter(letter);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getRandomRecipe(): Promise<ServiceResponse<IMealRecipes>> {
    const recipes = await this.mealsModel.findAll();
    const randomRecipe =
      recipes[Math.floor(Math.random() * recipes.length) + 1];
    return { status: 'SUCCESSFUL', data: randomRecipe };
  }

  async getAllCategories(): Promise<ServiceResponse<IMealsCategory[]>> {
    const categories = await this.mealsModel.findAllCategories();
    return { status: 'SUCCESSFUL', data: categories };
  }

  async getAllAreas(): Promise<ServiceResponse<IAreaType[]>> {
    const areas = await this.mealsModel.findAllAreas();
    return { status: 'SUCCESSFUL', data: areas };
  }

  async getByCategory(
    category: string
  ): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findRecipeByCategory(category);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getByArea(area: string): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findRecipeByArea(area);
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getAllIngredients(): Promise<ServiceResponse<Ingredients>> {
    const ingredients = await this.mealsModel.findAllIngredients();
    return { status: 'SUCCESSFUL', data: { ingredients } };
  }

  async getByIngredient(
    ingredient: string
  ): Promise<ServiceResponse<IMealRecipes[]>> {
    const recipes = await this.mealsModel.findByIngredient(ingredient);
    if (!ingredient) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Must provide a ingredient' },
      };
    }
    return { status: 'SUCCESSFUL', data: recipes };
  }

  async getRecipeById(id: number): Promise<ServiceResponse<IMealRecipes>> {
    const recipe = await this.mealsModel.findRecipeById(id);
    if (!recipe) {
      return { status: 'NOT_FOUND', data: { message: 'Food not found' } };
    }
    return { status: 'SUCCESSFUL', data: recipe };
  }

  async addRecipeInProgress(
    recipeInProgress: Omit<IProgressMealRecipe, 'id'>
  ): Promise<ServiceResponse<IProgressMealRecipe>> {
    const { userId, mealId } = recipeInProgress;
    if (!userId) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Must provide a userId' },
      };
    }
    if (!mealId) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Must provide a mealId' },
      };
    }
    // IF NEEDS TO CHECK IF RECIPE IS ALREADY IN PROGRESS, INVOKE 'findRecipeInProgressById' HERE:   
    const recipe = await this.mealsModel.addMealInProgress(recipeInProgress);
    return { status: 'SUCCESSFUL', data: recipe };
  }

  async findRecipeInProgressById(
    recipeInProgress: Omit<IProgressMealRecipe, 'id' | 'markedIngredients'>
  ): Promise<ServiceResponse<IProgressMealRecipe>> {
    const { userId, mealId } = recipeInProgress;
    if (!userId) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Must provide a userId' },
      };
    }
    if (!mealId) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Must provide a mealId' },
      };
    }

    const inProgress = await this.mealsModel.findMealInProgress({
      userId,
      mealId,
    });

    if (!inProgress) {
      return { status: 'NOT_FOUND', data: { message: 'Recipe not found!' } };
    };

    return { status: 'SUCCESSFUL', data: inProgress };
  }

  async updateRecipeInProgressById(inProgress: Omit<IProgressMealRecipe, 'id'>) {
    const response = await this.mealsModel.updateMarkedIngredients(inProgress);

    if (response !== 1) {
      return { status: 'NOT_FOUND', data: { message: 'Recipe not found' } };
    };
    return { status: 'SUCCESSFUL', data: { message: `Marked ingredients updated!` } };
  }

  async favoriteMealRecipe(userId: number, id: number) {
    const favoriteExists = await this.mealsModel.findFavorite(userId);
    if (favoriteExists) {
      const isFavoriteRecipe = favoriteExists
        .favoriteRecipes.some((recipe) => recipe.mealId === id );

      if(isFavoriteRecipe) {
        return {status: 'CONFLICT', data: { message: 'Recipe already on favorites!' }}
      }   
    }
    await this.mealsModel.addRecipeInFavorite(userId, id);
    return {status: 'SUCCESSFUL', data: { message: 'Recipe added on favorites!' } };  
  }
}