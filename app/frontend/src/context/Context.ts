import { createContext } from 'react';
import {
  CategoryType,
  DrinkType,
  FavoriteDrinkReduceType,
  FavoriteMealReduceType,
  FetchedData,
  FilterRadioType,
  MealType,
  SearchActionType,
} from '../type';

export type ContextType = {
  route: string;
  filter: FilterRadioType;
  formattedFavorites:
  | FavoriteMealReduceType
  | FavoriteDrinkReduceType
  | undefined;
  allRecipes: (MealType | DrinkType)[];
  allRecipesPages: number[];
  recipesByFilter: (MealType | DrinkType)[];
  byFilterPages: number[];
  getCategories: () => CategoryType[];
  filterDispatch: React.Dispatch<SearchActionType>;
  setByFilterURL: React.Dispatch<React.SetStateAction<string>>;
  setRecipesFilter: (selectedFilter: FilterRadioType) => void;
  getSelectedCategory: (category: string) => void;
  getRecipesByPage: (
    recipes: (MealType | DrinkType)[],
    page: number
  ) => (MealType | DrinkType)[];
  getRecipes: (fetchedRecipe: FetchedData, category: string) => (MealType | DrinkType)[];
};

const Context = createContext({} as ContextType);

export default Context;
