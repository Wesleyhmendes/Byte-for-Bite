import { FavoriteDrinkReduceType, FavoriteMealReduceType } from '../type';

const checkFavoritesFromDB = (
  recipeType: string,
  id: string,
  formattedFavorites:
  | FavoriteMealReduceType
  | FavoriteDrinkReduceType
  | undefined,
) => {
  if (!formattedFavorites) {
    return false;
  }
  if (recipeType === '/meals') {
    const mealFavorites = formattedFavorites as FavoriteMealReduceType;
    const isFavorite = mealFavorites.favoriteRecipes?.some(
      (recipe) => Number(recipe?.idMeal) === Number(id),
    );

    return isFavorite;
  }
  const drinkFavorites = formattedFavorites as FavoriteDrinkReduceType;
  const isFavorite = drinkFavorites.favoriteRecipes?.some(
    (recipe) => Number(recipe?.idDrink) === Number(id),
  );

  return isFavorite;
};

export default checkFavoritesFromDB;
