import { useLocation } from 'react-router-dom';
import Context from '../Context';
import useRecipesProvider from '../../hooks/useRecipesProvider';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const path = useLocation().pathname;
  const route = path.includes('meals') ? '/meals' : '/drinks';
  const {
    filter,
    formattedFavorites,
    allRecipesPages,
    allRecipes,
    recipesByFilter,
    byFilterPages,
    inProgress,
    favorites,
    getCategories,
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    getSelectedCategory,
    getRecipesByPage,
    checkInProgressRecipe,
    checkFavoriteRecipe,
    selectedCategory,
  } = useRecipesProvider(route);

  const value = {
    route,
    filter,
    formattedFavorites,
    allRecipesPages,
    allRecipes,
    recipesByFilter,
    byFilterPages,
    inProgress,
    favorites,
    getCategories,
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    getSelectedCategory,
    getRecipesByPage,
    checkInProgressRecipe,
    checkFavoriteRecipe,
    selectedCategory,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}
