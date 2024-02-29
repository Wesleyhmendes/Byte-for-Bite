import { DrinkType, FetchedData, FilterRadioType, MealType } from '../type';
import useFetch from './useFetch';
import { useState } from 'react';

const useProvider = (path: string) => { 
  // URL's PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('') 

  // CATEGORIES URL
  const mealsCategoriesURL = 'http://localhost:3001/meals/categories';
  const drinksCategoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'; 

  // ALL RECIPES URL  
  const allMealRecipesURL = 'http://localhost:3001/meals/name';
  const allDrinksRecipesURL = 'http://localhost:3001/drinks/';

  // MEALS OR DRINKS BY CATEGORIES URL
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;  
  
  // CATEGORIES FETCHS
  const mealsCategories: FetchedData = useFetch(mealsCategoriesURL);
  const drinksCategories: FetchedData = useFetch(drinksCategoriesURL);

  // ALL RECIPES FETCHS
  const allMealRecipes: FetchedData = useFetch(allMealRecipesURL);
  const allDrinksRecipes: FetchedData = useFetch(allDrinksRecipesURL);
  
  const byCategory: FetchedData = useFetch(byCategoryURL);

  // GETTER FUNCTIONS 

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
    const { data, isLoading } = byCategory;    
    if (path === '/meals' && !isLoading) {
      const mealByCategory: MealType[] = data?.slice(0, 12);
      return mealByCategory;
    }
    if (path === '/drinks' && !isLoading) {      
      const drinksByCategory: DrinkType[] = data?.slice(0, 12);
      return drinksByCategory;
    }
    return [];
  }

  const getRecipesByFilter = (path: string, filter: FilterRadioType) => {    
    if (filter.radioSelected === 'f' && filter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    }
  }

  return {
    mealsCategories,
    drinksCategories,
    selectedCategory,    
    byCategory,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  }
}

export default useProvider;