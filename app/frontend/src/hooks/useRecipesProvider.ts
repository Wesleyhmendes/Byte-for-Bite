/* eslint-disable max-len */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { profile } = useContext(UserInfoContext);
  const userId = profile?.data?.id;

  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');

  // SEARCH BAR FILTER
  const { filter, filterDispatch } = useSearchBar();

  // URLS //
  const allCategoriesURL = `http://localhost:3001${path}/categories`;
  const allRecipesURL = `http://localhost:3001${path}/name`;
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;
  const favoritesURL = `http://localhost:3001${path}/favorites/search?user=${userId}`;
  const [byFilterURL, setByFilterURL] = useState('');

  // FETCHS
  const allCategories: FetchedData = useFetch(allCategoriesURL);
  const allRecipes: FetchedData = useFetch(allRecipesURL);
  const byCategory: FetchedData = useFetch(byCategoryURL);
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
      console.log(error);
    }
    return [];
  };

  const getCategories = () => {
    const { data, isLoading } = allCategories;
    if (!isLoading) {
      const categories: CategoryType[] = data;
      return categories;
    }
    return [];
  };

  const getAllRecipes = () => {
    const recipes = checkData(allRecipes);
    return recipes?.slice(0, 12);
  };

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const getByCategory = () => {
    const recipesByCategory = checkData(byCategory);
    return recipesByCategory?.slice(0, 12);
  };

  const setRecipesFilter = (selectedFilter: FilterRadioType) => {
    if (selectedFilter.radioSelected === 'f' && selectedFilter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else {
      const url = createURLFilter(path, filter.radioSelected, filter.search);
      setByFilterURL(url);
    }
  };

  const getRecipesByFilter = () => {
    const recipesByFilter = checkData(byFilter);
    if (!recipesByFilter) {
      return [];
    }
    if (recipesByFilter.length > 1) {
      return recipesByFilter;
    }
    if (recipesByFilter.length === 1 && byFilterURL !== '') {
      const id = recipesByFilter[0].idMeal ? recipesByFilter[0].idMeal : recipesByFilter[0].idDrink;
      navigate(`${path}/${id}`);
      setByFilterURL('');
      return [];
    }
    return [];
  };

  const formattedFavorites = formatFavorites(path, favorites);

  return {
    selectedCategory,
    filter,
    formattedFavorites,
    getCategories,
    filterDispatch,
    setByFilterURL,
    setRecipesFilter,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  };
};

export default useRecipesProvider;
