import { createContext } from 'react';
import { FetchedData } from '../type';

export type ContextType = {
  path: string,
  mealsCategories: FetchedData,
  drinksCategories: FetchedData,
  selectedCategory: string,
  allRecipes: FetchedData,
  byCategory: FetchedData,
  getByCategory: (selectedCategory: string) => Promise<void>
};

const Context = createContext({} as ContextType);

export default Context;