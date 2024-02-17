import { Op } from "sequelize";
import IMealRecipes from "../Interfaces/IMealRecipes";
import { IMealsRecipesModel } from "../Interfaces/meals/IMealsRecipesModel";
import MealsRecipe from "../database/models/Meals-Recipes";
import MealsCategories from "../database/models/Categories.model";
import IMealsCategory from "../Interfaces/iCategory";

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
  async findAllAreas(): Promise<IMealsCategory[]> {
    const areas = await this.mealsModel.findAll({
      attributes: ['strArea']
    })
  }
}