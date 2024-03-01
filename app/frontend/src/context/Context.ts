import { createContext } from 'react';
import {
  CategoryType,
  DrinkType,  
  FilterRadioType,
  MealType,
  SearchActionType,
} from '../type';

export type ContextType = {
  path: string,  
  selectedCategory: string,  
  filter: FilterRadioType,
  getCategories: () => CategoryType[],
  filterDispatch: React.Dispatch<SearchActionType>,
  setRecipesFilter: (selectedFilter: FilterRadioType) => void,
  getRecipesByFilter: () => MealType[] | DrinkType[],  
  getSelectedCategory: (category: string) => void,
  getAllRecipes: () => MealType[] | DrinkType[],
  getByCategory: () => MealType[] | DrinkType[],
};

const Context = createContext({} as ContextType);

export default Context;