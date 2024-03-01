import { CategoryType, DrinkType, FetchedData, FilterRadioType, MealType } from '../type';
import { createURLFilter } from '../utils/functions/createURLFilter';
import useFetch from './useFetch';
import { useState } from 'react';
import useSearchBar from './useSearchBar';
import { useNavigate } from 'react-router-dom';

const useProvider = (path: string) => { 
  const navigate = useNavigate();
  
  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // SEARCH BAR FILTER
  const { filter, filterDispatch } = useSearchBar();  

  // CATEGORIES URL  
  const allCategoriesURL = `http://localhost:3001${path}/categories`;

  // ALL RECIPES URL
  const allRecipesURL = `http://localhost:3001${path}/name`;

  // MEALS OR DRINKS BY CATEGORIES URL
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;

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

  // GETTER FUNCTIONS 

  const checkData = (fetchedData: FetchedData) => {
    const { data, isLoading } = fetchedData;
    if (path === '/meals' && !isLoading) {
      const meals: MealType[] = data; 
      return meals
    }
    if (path === '/drinks' && !isLoading) {
      const drinks: DrinkType[] = data;
      return drinks
    }
    return [];
  }  

  const getCategories = () => {
    const { data, isLoading } = allCategories;
    if (!isLoading) {
      const categories: CategoryType[] = data;
      return categories?.slice(0, 5);
    }
    return [];
  }

  const getAllRecipes = () => {    
    const recipes = checkData(allRecipes);
    return recipes?.slice(0, 12);
  }

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);    
  };

  const getByCategory = () => {
    const recipesByCategory = checkData(byCategory);
    return recipesByCategory?.slice(0, 12);
  }

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
 
  return {      
    selectedCategory,   
    filter,
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

export default useProvider;