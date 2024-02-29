import mapCategories from '../utils/mapCategories';
import useFetch from './useFetch';
import { useState } from 'react';

const useProvider = (path: string) => { 
  // URL's PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('') 

  // CATEGORIES
  const mealsCategoriesURL = 'http://localhost:3001/meals/categories';
  const drinksCategoriesURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';  
  // MEALS OR DRINKS
  const allRecipesURL = path === '/meals' ? 'http://localhost:3001/meals/name' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  // MEALS OR DRINKS BY CATEGORIES
  const byCategoryURL = `http://localhost:3001${path}/category?q=${selectedCategory}`;
  
  
  // FETCHS
  const mealsCategories = useFetch(mealsCategoriesURL)
  const drinksCategories = useFetch(drinksCategoriesURL)  
  const allRecipes = useFetch(allRecipesURL);
  const byCategory = useFetch(byCategoryURL);

  // GETTER FUNCTIONS
  const getByCategory = async (category: string) => {
    const categoryNumber = mapCategories(category);
    const pathCategory = path === '/meals' ? category : categoryNumber;
    setSelectedCategory(pathCategory);
    const { handleFetch } = byCategory;
    handleFetch();  
  };  

  return {
    mealsCategories,
    drinksCategories,
    selectedCategory,
    allRecipes,
    byCategory,
    getByCategory,
  }
}

export default useProvider;