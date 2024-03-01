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
  filter: FilterRadioType,
  filterDispatch: React.Dispatch<SearchActionType>,
  setRecipesFilter: (selectedFilter: FilterRadioType) => void,
  getRecipesByFilter: () => MealType[] | DrinkType[],  
  getSelectedCategory: (category: string) => void,
  getAllRecipes: () => MealType[] | DrinkType[],
  getByCategory: () => MealType[] | DrinkType[],
};

const Context = createContext({} as ContextType);

export default Context;