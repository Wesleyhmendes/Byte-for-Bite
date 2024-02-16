import { FilterRadioType } from '../type';

export const fetchMeals = async () => {
  const URL_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.meals;
};

export const fetchMealsByFilter = async (
  { radioSelected, search }: FilterRadioType,
) => {
  const URL_API = `https://www.themealdb.com/api/json/v1/1/${radioSelected === 'i' ? 'filter' : 'search'}.php?${radioSelected}=${search}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.meals;
};

export const fetchMealsCategories = async () => {
  const URL_API = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.meals;
};

export const fetchMealsFilterByCategory = async (category: string) => {
  const URL_API = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data.meals;
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

export const fetchDrinksFilterByCategory = async (category: number) => {
  const URL_API = `http://localhost:3001/drinks/category?q=${category}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchRecipeById = async (typeRecipe: string, id: string) => {
  const URL_API = typeRecipe === 'meals' ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}` : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(URL_API);
  const data = await response.json();
  return data[typeRecipe][0];
};
