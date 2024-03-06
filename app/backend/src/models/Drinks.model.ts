import { Op } from 'sequelize';
import SequelizeDrinks from '../database/models/03Drinks-Recipes.model';
import DrinkCategories from '../database/models/01Drinks-Categories.model';
import { IDrinkModel, iDrinkCategories, iDrinkRecipe } from '../Interfaces/drinks/iDrinks';
import DrinksCategories from '../database/models/01Drinks-Categories.model';
import InProgressDrinksModel from '../database/models/07In-Progress-Drinks';
import { IProgressDrinkRecipe } from '../Interfaces/IProgress';

export default class DrinksModel implements IDrinkModel {
  private Drinkmodel = SequelizeDrinks;
  private inProgressModel = InProgressDrinksModel;
  private CategoryModel = DrinkCategories;

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

  async addDrinkInProgress(recipeInProgress: Omit<IProgressDrinkRecipe, 'id'>): Promise<IProgressDrinkRecipe> {
    const { dataValues } = await this.inProgressModel.create(recipeInProgress);
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
}
