import { FetchedData } from '../type';
import mapCategories from '../utils/mapCategories';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';

const useProvider = (path: string) => { 
  const mealsPath =  path === 'meals' ? true : false;
  
  // URL's PARAMETERS
  const [selectedCategory, setSelectedCategory] = useState('')
  // const [categories, setCategories] = useState<FetchedData>()

  // CATEGORIES
  const categoriesURL = mealsPath ? 'http://localhost:3001/meals/categories' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  // MEALS OR DRINKS
  const allRecipesURL = mealsPath ? 'http://localhost:3001/meals/name' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  // MEALS OR DRINKS BY CATEGORIES
  const byCategoryURL = `http://localhost:3001/${path}/category?q=${selectedCategory}`;
  
  
  // FETCHS
  const categories = useFetch(categoriesURL);
  const allRecipes = useFetch(allRecipesURL);
  const byCategory = useFetch(byCategoryURL);

  // GETTER FUNCTIONS
  const getByCategory = async (category: string) => {
    const categoryNumber = mapCategories(category);
    const pathCategory = mealsPath ? category : categoryNumber;
    setSelectedCategory(pathCategory);
    const { handleFetch } = byCategory;
    handleFetch();  
  };  

  // console.log(categories)

  // useEffect(() => {
  //   if (teste.data) {
  //     setCategories(teste)
  //   }
  // }, [path])

  return {
    categories,
    selectedCategory,
    allRecipes,
    byCategory,
    getByCategory,
  }
}

export default useProvider;