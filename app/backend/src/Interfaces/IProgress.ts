import { DrinkMarkedIngredients, MealMarkedIngredients } from "./MarkedIngredients";

export interface IProgressRecipe {
  id: number,
  userId: number,
  recipeId: number,
  markedIngredients: DrinkMarkedIngredients | MealMarkedIngredients,
}