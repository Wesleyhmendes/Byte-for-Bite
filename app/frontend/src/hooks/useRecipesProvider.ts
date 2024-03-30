/* eslint-disable max-len */
import { useContext, useState } from 'react';
import {
  CategoryType,
  DrinkType,
  FetchedData,
  FilterRadioType,
  MealType,
} from '../type';
import useFetch from './useFetch';
import useSearchBar from './useSearchBar';
import { createURLFilter } from '../utils/createURLFilter';
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import formatFavorites from '../utils/formatFavorites';

const useRecipesProvider = (path: string) => {
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');

  // SEARCH BAR FILTER
  const { filter, filterDispatch } = useSearchBar();

  // URLS //
  const allCategoriesURL = `http://localhost:3001${path}/categories`;
  const allRecipesURL = `http://localhost:3001${path}/name`;
  const favoritesURL = `http://localhost:3001${path}/favorites/search?user=${userId}`;
  const [byFilterURL, setByFilterURL] = useState('');

  // FETCHS
  const allCategories: FetchedData = useFetch(allCategoriesURL);
  const allFetchedRecipes: FetchedData = useFetch(allRecipesURL);
  const byFilter = useFetch(byFilterURL);
  const favorites = useFetch(favoritesURL);

  // GETTER FUNCTIONS //
  const checkData = (fetchedData: FetchedData) => {
    const { data, isLoading, error } = fetchedData;
    if (path === '/meals' && !isLoading) {
      const meals: MealType[] = data;
      return meals;
    }
    if (path === '/drinks' && !isLoading) {
      const drinks: DrinkType[] = data;
      return drinks;
    }
    if (!isLoading && error) {
      console.log(error.message);
    }
    return [];
  };

  const getCategories = () => {
    const { data } = allCategories;
    const categories: CategoryType[] = data;
    if (!Array.isArray(categories)) {
      return [];
    }

    return categories;
  };

  const getPages = (recipes: (MealType | DrinkType)[]) => {
    if (recipes) {
      const pages = Math.ceil(recipes.length / 12);
      const pagesArr = Array.from({ length: pages }, (_, i) => i + 1);
      return pagesArr;
    }
    return [];
  };

  const getRecipes = (fetchedRecipe: FetchedData, category: string) => {
    const recipes = checkData(fetchedRecipe);
    if (!Array.isArray(recipes)) {
      return [];
    }
    if (category !== '') {
      const recipesByCategory = recipes?.filter((recipe) => recipe.strCategory === category);

      return recipesByCategory;
    }

    return recipes;
  };

  const getRecipesByPage = (recipes: (MealType | DrinkType)[], page: number) => {
    const initialIndex = (12 * page) - 12;
    const lastIndex = 12 * page;

    return recipes.slice(initialIndex, lastIndex);
  };

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const setRecipesFilter = (selectedFilter: FilterRadioType) => {
    if (selectedFilter.radioSelected === 'f' && selectedFilter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else {
      const url = createURLFilter(path, filter.radioSelected, filter.search);
      setByFilterURL(url);
    }
  };

  const allRecipes = getRecipes(allFetchedRecipes, selectedCategory);
  const allRecipesPages = getPages(allRecipes);
  const recipesByFilter = getRecipes(byFilter, selectedCategory);
  const byFilterPages = getPages(recipesByFilter);
  const formattedFavorites = formatFavorites(path, favorites);

  return {
    filter,
    formattedFavorites,
    allRecipes,
    allRecipesPages,
    recipesByFilter,
    byFilterPages,
    getCategories,
    filterDispatch,
    setByFilterURL,
    setRecipesFilter,
    getSelectedCategory,
    getRecipesByPage,
    getRecipes,
  };
};

export default useRecipesProvider;
