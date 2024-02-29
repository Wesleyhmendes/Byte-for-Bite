export type UserInfoType = { 
  email: string;
  password: string;
  profileImage?: string;
};

export type User = {
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
}

export type FetchAction =
| { type: 'loading' }
| { type: 'error'; payload: any }
| { type: 'fetched'; payload: any }
| { type: 'reset' }

export type FetchedData = {
  data: any;
  isLoading: boolean;
  error: any;
  handleFetch: () => Promise<void>;
  dispatch: React.Dispatch<FetchAction>;
}

export type FilterRadioType = {
  radioSelected: 'ingredient' | 'name' | 'firstLetter' | string;
  search: string,
};

export type CategoryType = {
  [strCategory: string]: string;
};

export type MealType = {
  idMeal: string,
  strMealThumb: string;
  strMeal: string;
  strCategory: string
  [strIngredient: string]: string;
};

export type DrinkType = {
  idDrink: string,
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
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
  doneDate: string,
  tags: string[]
};

export type FavoriteRecipeType = {
  id: string,
  type: string,
  nationality: string,
  category: string,
  alcoholicOrNot: string,
  name: string,
  image: string,
};
