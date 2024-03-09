import { ServiceResponse } from '../Interfaces/serviceReponse';
import { iDrinkRecipe } from '../Interfaces/drinks/iDrinks';
import DrinksModel from '../models/Drinks.model';
import { IProgressDrinkRecipe } from '../Interfaces/IProgress';

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

  async getById(id: number) {
    const recipe = await this.drinkModel.getDrinkById(id);
    if (!recipe) {
      return { status: 'NOT_FOUND', data: { message: 'drinks not found' } }
    }

    return { status: 'SUCCESSFUL', data: recipe };
  }

  async getDrinkByName(q: string) {
    const drinks = await this.drinkModel.getFilteredDrinks(q);

    if (drinks === null) {
      return { status: 'NOT_FOUND', data: { message: 'drink not found' } }
    };

    return { status: 'SUCCESSFUL', data: drinks };
  }

  async getDrinksByFirstLetter(q: string) {
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

  async addDrinkInProgress(recipeInProgress: Omit<IProgressDrinkRecipe, 'id'>): Promise<ServiceResponse<IProgressDrinkRecipe>> {
    const { userId, drinkId } = recipeInProgress;

    if (!userId) {
      return {status: 'INVALID_DATA', data: { message: 'Must have a userId' } }
    }

    if (!drinkId) {
      return {status: 'INVALID_DATA', data: { message: 'Must have a drinkId' } }
    }
    // IF NEEDS TO CHECK IF RECIPE IS ALREADY IN PROGRESS, INVOKE 'findRecipeInProgressById' HERE:    
    const recipe = await this.drinkModel.addDrinkInProgress(recipeInProgress)   
    return { status: 'SUCCESSFUL', data: recipe }
  }

  async findRecipeInProgressById(recipeInProgress: Omit<IProgressDrinkRecipe, 'id' | 'markedIngredients'>): Promise<ServiceResponse<IProgressDrinkRecipe>>  {
    const { userId, drinkId } = recipeInProgress;
    if (!userId) {
      return {status: 'INVALID_DATA', data: { message: 'Must provide a userId' } }
    };
    if (!drinkId) {
      return {status: 'INVALID_DATA', data: { message: 'Must provide a mealId' } }
    };

    const inProgress = await this.drinkModel.findDrinkInProgress({
      userId,
      drinkId,
    })

    if (!inProgress) {
      return { status: 'NOT_FOUND', data: { message: 'Recipe not found!' } };
    }

    return { status: 'SUCCESSFUL', data: inProgress };
  }

  async updateRecipeInProgressById(inProgress: Omit<IProgressDrinkRecipe, 'id'>) {
    const response = await this.drinkModel.updateMarkedIngredients(inProgress);

    if (response !== 1) {
      return { status: 'NOT_FOUND', data: { message: 'Recipe not found' } };
    };
    return { status: 'SUCCESSFUL', data: { message: `Marked ingredients updated!` } };
  }
  async favoriteDrinkRecipe(userId: number, id: number) {
    const favorite = await this.drinkModel.createFavoriteDrinks(userId, id);
    if(favorite) {
     return {status: 'SUCCESSFUL', data: { message: 'Recipe stored in favorites' }}    
    } 
    return {status: 'SUCCESSFUL', data: { message: 'Recipe removed from favorites' }};
   }

  async getFavoriteRecipes(userId: number) {
    const favoriteRecipes = await this.drinkModel.getFavoriteRecipes(userId);
    if (!favoriteRecipes) {
      return {status: 'NOT_FOUND', data: { message: 'No favorite recipes stored!' }};
    }

    return { status: 'SUCCESSFUL', data: favoriteRecipes };
  }
}
