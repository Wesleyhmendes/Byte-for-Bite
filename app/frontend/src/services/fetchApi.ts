import { FilterRadioType } from '../type';
import { createUrlMealsFilter } from '../utils/functions/createUrlMealsFilter';

export const fetchMeals = async (token: string) => {
  const URL_API = 'http://localhost:3001/meals/name';
  const response = await fetch(URL_API, { headers: {
    Authorization: `bearer ${ token }`
  } });
  const data = await response.json();
  return data;
};

export const fetchMealsByFilter = async (
  { radioSelected, search }: FilterRadioType,
) => {
  const URL_API = createUrlMealsFilter(radioSelected, search);
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchMealsCategories = async () => {
  const URL_API = 'http://localhost:3001/meals/categories';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchMealsFilterByCategory = async (category: string) => {

  const URL_API = `http://localhost:3001/meals/category?q=${category}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchDrinks = async () => {
  const URL_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.drinks;
};

export const fetchDrinksByFilter = async (
  { radioSelected, search }: FilterRadioType,
) => {
  const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/${radioSelected === 'i' ? 'filter' : 'search'}.php?${radioSelected}=${search}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.drinks;
};

export const fetchDrinksCategories = async () => {
  const URL_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const response = await fetch(URL_API);
  const data = await response.json();
  return data.drinks;
};

export const fetchDrinksFilterByCategory = async (category: string) => {
  const URL_API = `http://localhost:3001/drinks/category?q=${category}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchRecipeById = async (typeRecipe: string, id: string) => {
  const URL_API = typeRecipe === 'meals' ? `http://localhost:3001/meals/${id}` : `http://localhost:3001/drinks/${id}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};
