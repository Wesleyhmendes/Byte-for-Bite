// USER
export type User = {
  id?: number,
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
  profileImage?: string;
};

export type GoogleUser = {
  email: string,
  username: string,
  profileImage: string,
  email_verified: string,
};

// ACTIONS
export type UserAction =
| { type: 'UPDATE_USER', key?: string, value?: string }
| { type: 'RESET_USER' }
| { type: 'GOOGLE_USER', value: GoogleUser };

export type FetchAction =
| { type: 'loading' }
| { type: 'error', payload: any }
| { type: 'fetched', payload: any }
| { type: 'reset' };

export type SearchActionType = {
  type: string,
  key?: string,
  value?: string,
};

export type CheckIngredientActionType = {
  type: string,
  name?: string,
  value?: boolean,
};

// FETCH TYPES
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchOptions {
  method?: RequestMethod,
  body?: any;
}

export type FetchedData = {
  data: any;
  isLoading: boolean;
  error: any;
  handleFetch: () => Promise<void>;
  dispatch: React.Dispatch<FetchAction>;
};

// RECIPE TYPES
export type FilterRadioType = {
  radioSelected: 'i' | 's' | 'f';
  search: string;
  searchActive: boolean;
};

export type CategoryType = {
  [strCategory: string]: string;
};

export type MealType = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
  strCategory: string;
  [strIngredient: string]: string;
};

export type DrinkType = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
  strAlcoholic: string;
  [strIngredient: string]: string;
};

// FAVORITE RECIPE TYPES

export type MealInfoType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
};

export type FavoriteMealType = {
  userId: number;
  favoriteRecipes: MealInfoType;
};

export type DrinkInfoType = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
};

export type FavoriteDrinkType = {
  userId: number;
  favoriteRecipes: DrinkInfoType;
};

export type FavoriteMealReduceType = {
  userId: number | undefined;
  favoriteRecipes: MealInfoType[];
};

export type FavoriteDrinkReduceType = {
  userId: number | undefined;
  favoriteRecipes: DrinkInfoType[];
};

// DONE RECIPE TYPES
export type DoneMealType = {
  userId: number;
  finishedRecipes: MealInfoType;
};

export type DoneDrinkType = {
  userId: number;
  finishedRecipes: DrinkInfoType;
};

export type DoneMealReduceType = {
  userId: number;
  finishedRecipes: MealInfoType[];
};

export type DoneDrinkReduceType = {
  userId: number;
  finishedRecipes: DrinkInfoType[];
};

// INGREDIENT LIST TYPE
export type IngredientListType = {
  strIngredient1: boolean,
  strIngredient2: boolean,
  strIngredient3: boolean,
  strIngredient4: boolean,
  strIngredient5: boolean,
  strIngredient6: boolean,
  strIngredient7: boolean,
  strIngredient8: boolean,
  strIngredient9: boolean,
  strIngredient10: boolean,
  strIngredient11: boolean,
  strIngredient12: boolean,
  strIngredient13: boolean,
  strIngredient14: boolean,
  strIngredient15: boolean,
  strIngredient16: boolean,
  strIngredient17: boolean,
  strIngredient18: boolean,
  strIngredient19: boolean,
  strIngredient20: boolean,
};
