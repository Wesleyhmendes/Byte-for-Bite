import { Op } from 'sequelize';
import SequelizeDrinks from '../database/models/03Drinks-Recipes.model';
import DrinkCategories from '../database/models/01Drinks-Categories.model';
import { IDrinkModel, iDrinkCategories, iDrinkRecipe } from '../Interfaces/drinks/iDrinks';
import DrinksCategories from '../database/models/01Drinks-Categories.model';
import InProgressDrinksModel from '../database/models/07In-Progress-Drinks';
import { IProgressDrinkRecipe } from '../Interfaces/IProgress';
import { startDrinkRecipeInProgress } from '../utils/startRecipeInProgress';
import FavoriteDrinksModel from '../database/models/05Favorite-Drinks';

export default class DrinksModel implements IDrinkModel {
  private Drinkmodel = SequelizeDrinks;
  private inProgressModel = InProgressDrinksModel;
  private CategoryModel = DrinkCategories;
  private FavoriteDrinksModel = FavoriteDrinksModel

  async findAll(): Promise<iDrinkRecipe[]> {
    const recipes = await this.Drinkmodel.findAll({
      include: [{
        model: DrinksCategories, as: 'category', attributes: ['strCategory']
      }],
      attributes: { exclude: ['strCategory'] }
    });

    const newRecipes = recipes.map((recipe) => {
      const { category, ...rest } = recipe.toJSON() as iDrinkRecipe;
      return { ...rest, strCategory: category?.strCategory };
    });

    return newRecipes;
  }

  async getDrinkById(id: number) {
    const recipe = await this.Drinkmodel.findByPk(id);
    return recipe;
  }

  async getFilteredDrinks(q: string): Promise<iDrinkRecipe[] | null> {
    const dbResponse = await this.Drinkmodel.findAll({
      where: {
        strDrink: {
          [Op.like]: `%${q}%`
        }
      }
    });

    if (!dbResponse) return null;

    return dbResponse;
  }

  async getDrinkByCategory(q: string): Promise<iDrinkRecipe[]> {
    const recipes = await this.Drinkmodel.findAll({
      include: [{
        model: DrinksCategories, as: 'category', attributes: ['strCategory']
      }],
      attributes: { exclude: ['strCategory'] }
    });

    const newRecipes = recipes.map((recipe) => {
      const { category, ...rest } = recipe.toJSON() as iDrinkRecipe;
      return { ...rest, strCategory: category?.strCategory };
    }).filter((recipe) => recipe.strCategory === q);

    return newRecipes
  }

  async getCategories(): Promise<iDrinkCategories[]> {
    const categories = await this.CategoryModel.findAll();
    return categories;
  }

  async getAllIngredients(): Promise<string[]> {
    const recipes = await this.findAll();
    const uniqueIngredients:any [] = [];
    recipes.forEach((recipe) => {
      for(let i = 1; i <= 20; i += 1) {
        const ingredientKey = `strIngredient${i}` as keyof iDrinkRecipe;
        const ingredient = recipe[ingredientKey];
        if(ingredient) {
          uniqueIngredients.push(ingredient);
        }
      }
    });
    const removedDup = new Set(uniqueIngredients);
    const newIngredients = Array.from(removedDup);
    return newIngredients;
  }

  async getByIngredients(q: string) {   
    const recipes = await this.findAll();
    const recipesFiltred = recipes.filter((recipe) => {
      const values: string[] = Object.values(recipe);

      const valuesLower: string[] = values.map((value) =>{
        return typeof value === 'string'? value.toLowerCase() : value;
      })
      
      if(valuesLower.includes(q.toLowerCase())) {
        return true;
      }
      return false;
    });

    return recipesFiltred;
  }

  async addDrinkInProgress(recipeInProgress: Omit<IProgressDrinkRecipe, 'id'| 'markedIngredients'>): Promise<IProgressDrinkRecipe> {
    const defaultIngredients = startDrinkRecipeInProgress();

    const { dataValues } = await this.inProgressModel.create({...recipeInProgress, markedIngredients: defaultIngredients});

    return dataValues;
  }

  async findDrinkInProgress(recipeInProgress: Omit<IProgressDrinkRecipe, 'id'|'markedIngredients'>): Promise<IProgressDrinkRecipe | null> {
    const { userId, drinkId } = recipeInProgress;
    const foundRecipe = await this.inProgressModel.findOne({
      where: {
        userId,
        drinkId,
      }
    });
    
    return foundRecipe
  }

  async updateMarkedIngredients(recipeInProgress: Omit<IProgressDrinkRecipe, 'id'>): Promise<number | null> {
    const { userId, drinkId, markedIngredients } = recipeInProgress;
    const rowCount = await this.inProgressModel.update({markedIngredients}, {
      where: {
        userId,
        drinkId,
      }
    })

    if (rowCount[0] === 0) return null;

    return rowCount[0];
  }

  async createFavoriteDrinks(userId: number) {   
    const createFavorite = {
      userId,
      favoriteRecipes: []
    }
    const { dataValues } = await this.FavoriteDrinksModel.create(createFavorite);

    return dataValues;
  }

  async findFavorite(userId: number) {
    const foundFavorite = await this.FavoriteDrinksModel.findOne({
      where: {
        userId
      }
    });

    return foundFavorite;
  }

  async addRecipeInFavorite(userId: number, drinkId: number) {
    const foundFavorite = await this.findFavorite(userId);
    if (!foundFavorite) {
      await this.createFavoriteDrinks(userId);
      const newFavorite = [{drinkId}];      
      const rowCount = await this.FavoriteDrinksModel.update({favoriteRecipes: newFavorite}, {
        where: {
          userId
        },
      })
      return rowCount;                 
    }
    
    const updatedFavorites = [...foundFavorite.favoriteRecipes, {drinkId}];
    const rowCount = await this.FavoriteDrinksModel.update({favoriteRecipes: updatedFavorites}, {
      where: {
        userId
      },
    });

    return rowCount;
  }
}
