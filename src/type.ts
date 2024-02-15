export type UserInfoType = {
  email: string;
  password: string;
};

export type FilterRadioType = {
  radioSelected: 'ingredient' | 'name' | 'firstLetter' | string;
  search: string,
};

export type CategoryType = {
  [strCategory: string]: string;
};

export type MealType = {
  strMealThumb: string;
  strMeal: string;
  strCategory: string
  [strIngredient: string]: string;
};

export type DrinkType = {
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
