import { createContext } from 'react';
import { CategoryType, DrinkType, FilterRadioType } from '../../type';

export type DrinkContextType = {
  drinksData: DrinkType[];
  drinksInitialData: DrinkType[];
  drinksCategoriesData: CategoryType[];
  getDrinksByFilter: (drinks: FilterRadioType) => void;
  getDrinksByCategory: (category: string) => void;
  clearCategoriesDrink: () => void;
};

const DrinksContext = createContext({} as DrinkContextType);

export default DrinksContext;
