import { createContext } from 'react';
import {
  CategoryType,
  DrinkType,  
  FilterRadioType,
  MealType,
  SearchActionType,
} from '../type';

export type ContextType = {
  route: string,  
  selectedCategory: string,  
  filter: FilterRadioType,
  getCategories: () => CategoryType[],
  filterDispatch: React.Dispatch<SearchActionType>,
  setRecipesFilter: (selectedFilter: FilterRadioType) => void,
  setSelectedId: (id: string) => void,
  setByFilterURL: (value: React.SetStateAction<string>) => void,
  getRecipesByFilter: () => MealType[] | DrinkType[],  
  getSelectedCategory: (category: string) => void,
  getAllRecipes: () => MealType[] | DrinkType[],
  getByCategory: () => MealType[] | DrinkType[],
  getRecipeById: () => MealType | DrinkType | undefined,
};

const Context = createContext({} as ContextType);

export default Context;