import { DrinkType, FetchedData, FilterRadioType, MealType } from '../type';
import { createURLFilter } from '../utils/functions/createURLFilter';
import useFetch from './useFetch';
import { useState } from 'react';
import useSearchBar from './useSearchBar';

const useProvider = (path: string) => { 
  
  // URL's CATEGORY PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // SEARCH BAR FILTER
  const { filter, handleFilterChange, filterDispatch } = useSearchBar();  

  // CATEGORIES URL
  const mealsCategoriesURL = 'http://localhost:3001/meals/categories';
  const drinksCategoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'; 

  // ALL RECIPES URL  
  const allMealRecipesURL = 'http://localhost:3001/meals/name';
  const allDrinksRecipesURL = 'http://localhost:3001/drinks/';

  // MEALS OR DRINKS BY CATEGORIES URL
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;

  // MEALS OR DRINKS WITH FILTER URL
  const [byFilterURL, setByFilterURL] = useState('');

  // CATEGORIES FETCHS
  const mealsCategories: FetchedData = useFetch(mealsCategoriesURL);
  const drinksCategories: FetchedData = useFetch(drinksCategoriesURL);

  // ALL RECIPES FETCHS
  const allMealRecipes: FetchedData = useFetch(allMealRecipesURL);
  const allDrinksRecipes: FetchedData = useFetch(allDrinksRecipesURL);

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
    if (path === '/drinks') {
      const drinks: DrinkType[] = data;
      return drinks
    }
    return [];
  }

  const getAllRecipes = (path: string) => {
    const { data: mealsData, isLoading: loadingMeals } = allMealRecipes;
    const {data: drinksData, isLoading: loadingDrinks} = allDrinksRecipes

    if (path === '/meals' && !loadingMeals) {
      const allMeals: MealType[] = mealsData;
      return allMeals?.slice(0, 12);
    }
    if (path === '/drinks' && !loadingDrinks) {
      const allDrinks: DrinkType[] = drinksData;
      return allDrinks?.slice(0, 12);
    }
    return [];
  }

  const getSelectedCategory = (category: string) => {
    setSelectedCategory(category);    
  };

  const getByCategory = (path: string) => {
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

  const getByRecipesByFilter = () => {
    const { data, isLoading } = byFilter
    if (path === '/meals' && !isLoading) {
      const meals: MealType[] = data;
      return meals
    }
    if (path === '/drinks' && !isLoading) {
      const drinks: DrinkType[] = data;
      return drinks
    }
    if (data?.length === 0) {
      alert("Sorry, we haven't found any recipes for these filters.");
    }
    return [];
  }   
  

  return {
    mealsCategories,
    drinksCategories,
    selectedCategory,    
    byCategory,
    filter,
    filterDispatch,
    handleFilterChange,
    setRecipesFilter,
    getByRecipesByFilter,    
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  }
}

export default useProvider;