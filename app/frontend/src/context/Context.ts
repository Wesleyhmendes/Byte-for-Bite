import { createContext } from 'react';
import {
  CategoryType,
  DrinkType,  
  FavoriteDrinkReduceType,  
  FavoriteMealReduceType,  
  FilterRadioType,
  MealType,
  SearchActionType,
} from '../type';

export type ContextType = {
  route: string,  
  selectedCategory: string,  
  filter: FilterRadioType,
  formattedFavorites: FavoriteMealReduceType | FavoriteDrinkReduceType | undefined,
  getCategories: () => CategoryType[],
  filterDispatch: React.Dispatch<SearchActionType>,
  setRecipesFilter: (selectedFilter: FilterRadioType) => void,  
  setByFilterURL: (value: React.SetStateAction<string>) => void,
  getRecipesByFilter: () => MealType[] | DrinkType[],  
  getSelectedCategory: (category: string) => void,
  getAllRecipes: () => MealType[] | DrinkType[],
  getByCategory: () => MealType[] | DrinkType[],  
};

const Context = createContext({} as ContextType);

export default Context;