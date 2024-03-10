import { Op } from "sequelize";
import IMealRecipes from "../Interfaces/meals/IMealRecipes";
import { IMealsRecipesModel } from "../Interfaces/meals/IMealsRecipesModel";
import MealsRecipe from "../database/models/04Meals-Recipes";
import MealsCategories from "../database/models/02Meals-Categories.model";
import IMealsCategory from "../Interfaces/iCategory";
import IAreaType from "../Interfaces/IAreaType";
import { IProgressMealRecipe } from '../Interfaces/IProgress';
import InProgressMealsModel from '../database/models/08In-Progress-Meals';
import { startMealRecipeInProgress } from '../utils/startRecipeInProgress';
import FavoriteMealsModel from '../database/models/06Favorite-Meals';
import FinishedMealsModel from '../database/models/10Finished-Meals';

export default class MealsModel implements IMealsRecipesModel {
  private mealsModel = MealsRecipe;
  private inProgressModel = InProgressMealsModel;
  private mealsCategoryModel = MealsCategories;
  private favoriteRecipesModel = FavoriteMealsModel;
  private doneMealsModel = FinishedMealsModel;
  
  async findAll(): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({
      include: [{
        model: MealsCategories, as: 'category', attributes: ['strCategory']
      }],
      attributes: {exclude: ['strCategory']}
    });
    const newRecipes = recipes.map((recipe) => {
      const {category, ...rest} = recipe.toJSON() as IMealRecipes;
      return {...rest, strCategory: category?.strCategory};
    }) 
    return newRecipes;
  }

  async findByName(name: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({where: {
      strMeal: {
        [Op.like]: `%${name}%`
      }
    },  include: [{
      model: MealsCategories, as: 'category', attributes: ['strCategory']
    }],
    attributes: {exclude: ['strCategory']}})
    const newRecipes = recipes.map((recipe) => {
      const {category, ...rest} = recipe.toJSON() as IMealRecipes;
      return {...rest, strCategory: category?.strCategory};
    }) 
  return newRecipes;
  };

  async findByFirstLetter(letter: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`
        }
      },
      include: [{
        model: MealsCategories, as: 'category', attributes: ['strCategory']
      }],
      attributes: {exclude: ['strCategory']}
    })
    const newRecipes = recipes.map((recipe) => {
      const {category, ...rest} = recipe.toJSON() as IMealRecipes;
      return {...rest, strCategory: category?.strCategory};
    }) 
  return newRecipes;
  }

  async findAllCategories(): Promise<IMealsCategory[]> {
    const categories = await this.mealsCategoryModel.findAll();
    return categories;
  }

  async findAllAreas(): Promise<IAreaType[]> {
    const areas = await this.mealsModel.findAll({
      attributes: ['strArea'],
      group: ['strArea'],
    });
    return areas;
  }

  async findRecipeByCategory(category: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({
      include: [{
        model: MealsCategories, as: 'category', attributes: ['strCategory'],
      }],
      attributes: {exclude: ['strCategory']},
    });
    const newRecipes = recipes.map((recipe) => {
      const {category, ...rest} = recipe.toJSON() as IMealRecipes;
      return {...rest, strCategory: category?.strCategory};
    }).filter((recipe) => recipe.strCategory === category);
    return newRecipes;
  }

  async findRecipeByArea(area: string): Promise<IMealRecipes[]> {
    const recipes = await this.mealsModel.findAll({
      where: {strArea: area},
      include: [{
        model: MealsCategories, as: 'category', attributes: ['strCategory'],
      }],
      attributes: {exclude: ['strCategory']},
    });
    const newRecipes = recipes.map((recipe) => {
      const {category, ...rest} = recipe.toJSON() as IMealRecipes;
      return {...rest, strCategory: category?.strCategory};
    })
    return newRecipes;
  }

  async findAllIngredients(): Promise<string[]> {
    const recipes = await this.findAll();
    const uniqueIngredients:any [] = [];
    recipes.forEach((recipe) => {
      for(let i = 1; i <= 20; i += 1) {
        const ingredientKey = `strIngredient${i}` as keyof IMealRecipes;
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

  async findByIngredient(ingredient: string): Promise<IMealRecipes[]> {
    const recipes = await this.findAll();
    const recipesFiltred = recipes.filter((recipe) => {
      const values: string[] = Object.values(recipe);

      const valuesLower: string[] = values.map((value) =>{
        return typeof value === 'string'? value.toLowerCase() : value;
      })
      
      if(valuesLower.includes(ingredient.toLowerCase())) {
        return true
      }
      return false;
    })

    return recipesFiltred;
  }
  
  async findRecipeById(id: number): Promise<IMealRecipes | null> {
    const recipe = await this.mealsModel.findByPk(id);
    return recipe;
  }

  async addMealInProgress(recipeInProgress: Omit<IProgressMealRecipe, 'id'|'markedIngredients'>): Promise<IProgressMealRecipe> {
    const defaultIngredients = startMealRecipeInProgress();

    const { dataValues } = await this.inProgressModel.create({...recipeInProgress, markedIngredients: defaultIngredients});

    return dataValues;
  }

  async findMealInProgress(recipeInProgress: Omit<IProgressMealRecipe, 'id'|'markedIngredients'>): Promise<IProgressMealRecipe | null> {
    const { userId, mealId } = recipeInProgress;
    const foundRecipe = await this.inProgressModel.findOne({
      where: {
        userId,
        mealId,
      },
    });
    
    return foundRecipe
  }

  async updateMarkedIngredients(recipeInProgress: Omit<IProgressMealRecipe, 'id'>): Promise<number | null> {
    const { userId, mealId, markedIngredients } = recipeInProgress;
    const rowCount = await this.inProgressModel.update({markedIngredients}, {
      where: {
        userId,
        mealId,
      },
    });

    if (rowCount[0] === 0) return null;

    return rowCount[0];
  }

  async createFavoriteMeals(userId: number, mealId: number) {   
    const findFavorite = await this.findFavorite(userId, mealId);
    if (!findFavorite) {
      const { dataValues } = await this.favoriteRecipesModel.create({userId, mealId});
      return dataValues;
    }
    await this.favoriteRecipesModel.destroy({where: {userId, mealId}});
  }

  async findFavorite(userId: number, mealId: number) {    
    const foundFavorite = await this.favoriteRecipesModel.findOne({
      where: {
        userId,
        mealId,
      }
    });
    
    return foundFavorite;
  } 

  async getFavoriteRecipes(userId: number) {
    const favorites = await this.favoriteRecipesModel.findAll({
      where: {userId},
      include: [{
        model: MealsRecipe,
        as: 'favoriteRecipes',
        attributes: ['idMeal', 'strMeal', 'strMealThumb', 'strArea']
      }],           
      attributes: {exclude: ['mealId']},      
    });
    
    return favorites;
  }

  async findDone(userId: number, mealId: number) {
    // console.log('USERID', userId, 'MEALID', mealId);
    const foundDone = await this.doneMealsModel.findOne({
      where: {
        userId,
        mealId,
      }
    });
    
    return foundDone;
  } 

  async createDoneMeals(userId: number, mealId: number) {   
    const findDone = await this.findDone(userId, mealId);    
    if (!findDone) {
      const { dataValues } = await this.doneMealsModel.create({userId, mealId});
      return dataValues;
    }
    await this.doneMealsModel.destroy({where: {userId, mealId}});
  }

  async getDoneRecipes(userId: number) {
    const doneRecipes = await this.doneMealsModel.findAll({
      where: {userId},
      include: [{
        model: MealsRecipe,
        as: 'finishedRecipes',
        attributes: ['idMeal', 'strMeal', 'strMealThumb', 'strArea']
      }],           
      attributes: {exclude: ['mealId']},      
    });   

    return doneRecipes;
  }
}