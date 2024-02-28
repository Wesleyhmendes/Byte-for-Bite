import { createContext } from 'react';
import { CategoryType, FetchedData, FilterRadioType, MealType } from '../../type';

export type MealsContextType = {
  mealsData: MealType[];
  mealsCategoriesData: CategoryType[],  
  mealsInitialData: CategoryType[],
  getMealsByFilter: (Filter: FilterRadioType) => void;
  getMealsByCategory: (category: string) => void;
  clearCategoriesMeal: () => void;
};

const MealsContext = createContext({} as MealsContextType);

export default MealsContext;
