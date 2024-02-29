import { createContext } from 'react';
import { DrinkType, FetchedData, MealType } from '../type';

export type ContextType = {
  path: string,
  mealsCategories: FetchedData,
  drinksCategories: FetchedData,
  selectedCategory: string,  
  byCategory: FetchedData,
  getSelectedCategory: (category: string) => void,
  getAllRecipes: (path: string) => MealType[] | DrinkType[],
  getByCategory: (path: string) => MealType[] | DrinkType[],
};

const Context = createContext({} as ContextType);

export default Context;