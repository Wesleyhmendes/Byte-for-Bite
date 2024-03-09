export interface IFavoriteMeal {  
  userId: number,
  mealId: number,
  favoriteRecipes?: string[];
};

export interface IFavoriteDrink {
  userId: number,
  drinkId: number,
  favoriteRecipes?: string[];
}