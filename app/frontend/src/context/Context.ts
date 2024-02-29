import { createContext } from 'react';
import {
  DrinkType,
  FetchedData,
  FilterRadioType,
  MealType,
  SearchActionType,
} from '../type';

export type ContextType = {
  path: string,
  mealsCategories: FetchedData,
  drinksCategories: FetchedData,
  selectedCategory: string,  
  byCategory: FetchedData,
  filter: FilterRadioType,
  filterDispatch: React.Dispatch<SearchActionType>,
  setRecipesFilter: (selectedFilter: FilterRadioType) => void,
  getByRecipesByFilter: () => MealType[] | DrinkType[],
  handleFilterChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
  getSelectedCategory: (category: string) => void,
  getAllRecipes: (path: string) => MealType[] | DrinkType[],
  getByCategory: (path: string) => MealType[] | DrinkType[],
};

const Context = createContext({} as ContextType);

export default Context;