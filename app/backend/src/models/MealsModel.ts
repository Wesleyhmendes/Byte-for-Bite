import { Op } from "sequelize";
import IMealRecipes from "../Interfaces/IMealRecipes";
import { IMealsRecipesModel } from "../Interfaces/meals/IMealsRecipesModel";
import MealsRecipe from "../database/models/Meals-Recipes";
import MealsCategories from "../database/models/Categories.model";
import IMealsCategory from "../Interfaces/iCategory";
import IAreaType from "../Interfaces/IAreaType";

export default class MealsModel implements IMealsRecipesModel {
  private mealsModel = MealsRecipe;
  private mealsCategoryModel = MealsCategories
  
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
  
}