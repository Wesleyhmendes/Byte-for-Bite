// USER
export type User = {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
  profileImage?: string;
}

// ACTIONS
export type UserAction = {
  type: string,
  key?: string,
  value?: string,
}

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

// FETCHED DATA
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

export type InProgressRecipeType = {
  drinks: {
    [key: string]: string[];
  };
  meals: {
    [key: string]: string[];
  };
};

export type DoneRecipeType = {
  id: string;
  type: string;
  nationality: string;
  category: string;
  alcoholicOrNot: string;
  name: string;
  image: string;
  doneDate: string;
  tags: string[]
};

// FAVORITES

export type FavoriteRecipeType = {
  id: string;
  type: string;
  nationality: string;
  category: string;
  alcoholicOrNot: string;
  name: string;
  image: string;
};

export type FavoriteMealType = {
  userId: number;
  favoriteRecipes: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea: string;
  }
};

export type FavoriteMeals = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
};

export type FavoriteDrinkType = {
  userId: number;
  favoriteRecipes: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strAlcoholic: string;
  }
};

export type FavoriteDrinks = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
}

export type FavoriteMealReduceType = {
  userId: number;
  favoriteRecipes: FavoriteMeals[]
}

export type FavoriteDrinkReduceType = {
  userId: number;
  favoriteRecipes: FavoriteDrinks[]
}

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
