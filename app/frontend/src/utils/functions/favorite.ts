import { DrinkType, FavoriteRecipeType, MealType } from '../../type';

export const addFavoriteRecipe = (
  storageData: FavoriteRecipeType[],
  typeRecipe: string,
  recipe: MealType | DrinkType | null,
) => {
  if (recipe !== null) {
    const updateFavorites = [...storageData, {
      id: typeRecipe === 'meals' ? recipe.idMeal : recipe.idDrink,
      type: typeRecipe.replace('s', ''),
      nationality: typeRecipe === 'meals' ? recipe.strArea : '',
      category: recipe.strCategory,
      alcoholicOrNot: typeRecipe === 'meals' ? '' : recipe.strAlcoholic,
      name: typeRecipe === 'meals' ? recipe.strMeal : recipe.strDrink,
      image: typeRecipe === 'meals' ? recipe.strMealThumb : recipe.strDrinkThumb,
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(updateFavorites));
  }
};

export const removeFavoriteRecipe = (
  id: string,
  storageData: FavoriteRecipeType[],
) => {
  const removedFavoriteItem = storageData.filter((recipe) => recipe.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(removedFavoriteItem));
};
