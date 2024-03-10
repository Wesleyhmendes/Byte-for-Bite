import { CategoryType, DrinkType, FetchedData, FilterRadioType, MealType } from '../type';
import useFetch from './useFetch';
import { useContext, useState } from 'react';
import useSearchBar from './useSearchBar';
import { useNavigate } from 'react-router-dom';
import { createURLFilter } from '../utils/createURLFilter';
import UserInfoContext from '../context/UserInfo/UserInfoContext';
import formatFavorites from '../utils/formatFavorites';

const useRecipesProvider = (path: string) => { 
  const navigate = useNavigate();
  const { profile } = useContext(UserInfoContext)
  const userId = profile?.data?.id

  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');  
  
  // SEARCH BAR FILTER
  const { filter, filterDispatch } = useSearchBar(); 

  // URLS //
  // CATEGORIES URL  
  const allCategoriesURL = `http://localhost:3001${path}/categories`;

  // ALL RECIPES URL
  const allRecipesURL = `http://localhost:3001${path}/name`;  

  // MEALS OR DRINKS BY CATEGORIES URL
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;
  
  // FAVORITE RECIPES URL
  const favoritesURL = `http://localhost:3001${path}/favorites/search?user=${userId}`;  

  // MEALS OR DRINKS WITH FILTER URL
  const [byFilterURL, setByFilterURL] = useState('');

  // CATEGORIES FETCH  
  const allCategories: FetchedData = useFetch(allCategoriesURL); 

  // ALL RECIPES FETCHS
  const allRecipes: FetchedData = useFetch(allRecipesURL);  

  // BY CATEGORY FETCH
  const byCategory: FetchedData = useFetch(byCategoryURL);

  // BY FILTER FETCH
  const byFilter = useFetch(byFilterURL);

  // FAVORITE RECIPES FETCH
  const favorites = useFetch(favoritesURL);

  // GETTER FUNCTIONS //  
  // CHECK DATA IF IT IS DRINKS OR MEALS
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

  // GET CATEGORIES
  const getCategories = () => {
    const { data, isLoading } = allCategories;
    if (!isLoading) {
      const categories: CategoryType[] = data;
      return categories?.slice(0, 5);
    }
    return [];
  }

  // ALL RECIPES
  const getAllRecipes = () => {    
    const recipes = checkData(allRecipes);
    return recipes?.slice(0, 12);
  }

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);    
  };

  // RECIPES BY CATEGORY
  const getByCategory = () => {
    const recipesByCategory = checkData(byCategory);
    return recipesByCategory?.slice(0, 12);
  }

  // RECIPES BY FILTER
  const setRecipesFilter = (selectedFilter: FilterRadioType) => {    
    if (selectedFilter.radioSelected === 'f' && selectedFilter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else {
      const url = createURLFilter(path, filter.radioSelected, filter.search);
      setByFilterURL(url);
    }
  }

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
  } 

  // FORMAT FAVORITE RECIPES DATA
  const formattedFavorites = formatFavorites(path, favorites);
  console.log()
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
  }
}

export default useRecipesProvider;