import { FavoriteDrinkType, FavoriteMealType, FavoriteMeals, FavoriteMealReduceType, FetchedData, FavoriteDrinkReduceType } from '../type';

const favoriteMealReducer = (favorites: FavoriteMealType[]) => {
  const reduceFavorite = favorites.reduce((acc, favorite) => {
    if (!acc.userId) {
      acc = {
        userId: favorite.userId,
        favoriteRecipes: [],
      }
    }

    acc.favoriteRecipes.push(favorite.favoriteRecipes)

    return acc;
  }, {} as FavoriteMealReduceType);

  return reduceFavorite
}

const favoriteDrinkReducer = (favorites: FavoriteDrinkType[]) => {
  const reduceFavorite = favorites.reduce((acc, favorite) => {
    if (!acc.userId) {
      acc = {
        userId: favorite.userId,
        favoriteRecipes: [],
      }
    }

    acc.favoriteRecipes.push(favorite.favoriteRecipes)

    return acc;
  }, {} as FavoriteDrinkReduceType);

  return reduceFavorite
}

const formatFavorites = (recypeType: string, favorites: FetchedData) => {
  const { data } = favorites
  if (data && recypeType === '/meals') {
    const favorite: FavoriteMealType[] = data;    
    const formattedFavorite = favoriteMealReducer(favorite);

    return formattedFavorite;    
  }
  if (data && recypeType === '/drinks') {
    const favorite: FavoriteDrinkType[] = data;
    const formattedFavorite = favoriteDrinkReducer(favorite);
    
    return formattedFavorite;
  }
  return undefined; 
}

export default formatFavorites;