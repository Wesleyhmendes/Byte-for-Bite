import { DrinkType, FetchedData, FilterRadioType, MealType } from '../type';
import { createURLFilter } from '../utils/functions/createURLFilter';
import useFetch from './useFetch';
import { useState } from 'react';
import useSearchBar from './useSearchBar';

const useProvider = (path: string) => { 
  
  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // SEARCH BAR FILTER
  const { filter, filterDispatch } = useSearchBar();  

  // CATEGORIES URL
  const mealsCategoriesURL = 'http://localhost:3001/meals/categories';
  const drinksCategoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  // ALL RECIPES URL
  const allRecipesURL = `http://localhost:3001${path}/name`;

  // MEALS OR DRINKS BY CATEGORIES URL
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;

  // MEALS OR DRINKS WITH FILTER URL
  const [byFilterURL, setByFilterURL] = useState('');

  // CATEGORIES FETCHS
  const mealsCategories: FetchedData = useFetch(mealsCategoriesURL);
  const drinksCategories: FetchedData = useFetch(drinksCategoriesURL);

  // ALL RECIPES FETCHS 
  const allRecipes: FetchedData = useFetch(allRecipesURL);

  // BY CATEGORY FETCH
  const byCategory: FetchedData = useFetch(byCategoryURL);

  // BY FILTER FETCH
  const byFilter = useFetch(byFilterURL);

  // GETTER FUNCTIONS 

  const analiseData = (fetchedData: FetchedData) => {
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

  const getAllRecipes = () => {    
    const recipes = analiseData(allRecipes);
    return recipes?.slice(0, 12);
  }

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);    
  };

  const getByCategory = () => {
    const recipesByCategory = analiseData(byCategory);
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
    const recipesByFilter = analiseData(byFilter)
    if (recipesByFilter?.length === 0) {
      alert("Sorry, we haven't found any recipes for these filters.");
    }
    return [];
  }   
  

  return {
    path,
    mealsCategories,
    drinksCategories,
    selectedCategory,   
    filter,
    filterDispatch,    
    setRecipesFilter,
    getRecipesByFilter,    
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  }
}

export default useProvider;