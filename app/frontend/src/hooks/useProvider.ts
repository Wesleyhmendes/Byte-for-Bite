import mapCategories from '../utils/mapCategories';
import useFetch from './useFetch';
import { useState } from 'react';

const useProvider = (path: string) => { 
  const mealsPath =  path === 'meals' ? true : false;
  
  // URL's PARAMETERS
  const [category, setCategory] = useState('')

  // CATEGORIES
  const categoriesURL = mealsPath ? 'http://localhost:3001/meals/categories' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  // MEALS OR DRINKS
  const allRecipesURL = mealsPath ? 'http://localhost:3001/meals/name' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  // MEALS OR DRINKS BY CATEGORIES
  const byCategoryURL = `http://localhost:3001/${path}/category?q=${category}`;
  
  
  // FETCHS
  const categories = useFetch(categoriesURL);
  const allRecipes = useFetch(allRecipesURL);
  const byCategory = useFetch(byCategoryURL);

  // GETTER FUNCTIONS
  const getByCategory = async (selectedCategory: string) => {
    const categoryNumber = mapCategories(category);
    const pathCategory = mealsPath ? selectedCategory : categoryNumber;
    setCategory(pathCategory);
    const { handleFetch } = byCategory;
    handleFetch();  
  };



  return {
    categories,
    allRecipes,
    byCategory,
    getByCategory,
  }
}

export default useProvider;