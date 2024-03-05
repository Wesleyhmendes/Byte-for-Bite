import { DrinkMarkedIngredients, MealMarkedIngredients } from "./MarkedIngredients";

export interface IProgressMealRecipe {
  id: number,
  userId: number,
  mealId: number,
  markedIngredients: MealMarkedIngredients,
}

export interface IProgressDrinkRecipe {
  id: number,
  userId: number,
  drinkId: number,
  markedIngredients: DrinkMarkedIngredients
}