import { createContext } from 'react';
import {
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
  inProgress: FetchedData;
  getCategories: () => CategoryType[];
  filterDispatch: React.Dispatch<SearchActionType>;
  setByFilterURL: React.Dispatch<React.SetStateAction<string>>;
  setRecipesFilter: (selectedFilter: FilterRadioType) => void;
  getSelectedCategory: (category: string) => void;
  getRecipesByPage: (
    recipes: (MealType | DrinkType)[],
    page: number
  ) => (MealType | DrinkType)[];
  checkInProgressRecipe: (recipeId: number) => boolean;
  checkFavoriteRecipe: (recipeId: number) => boolean;
  getRecipes: (fetchedRecipe: FetchedData, category: string) => (MealType | DrinkType)[];
  selectedCategory: string;
};

const Context = createContext({} as ContextType);

export default Context;
