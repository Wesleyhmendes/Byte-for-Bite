import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterRadioType, MealType } from '../../type';
import MealsContext from './MealsContext';
import {
  fetchMeals,
  fetchMealsByFilter,
  fetchMealsCategories,
  fetchMealsFilterByCategory,
} from '../../services/fetchApi';

type MealsProviderProps = {
  children: React.ReactNode;
};

export default function MealsProvider({ children }: MealsProviderProps) {
  const [mealsData, setMealsData] = useState<MealType[]>([]);
  const [mealsInitialData, setMealsInitialData] = useState([]);
  const [mealsCategoriesData, setMealsCategoriesData] = useState([]);
  const [currentCategoryMeals, setCurrentCategoryMeals] = useState('');
  const navigate = useNavigate();

  const getMealsCategories = async () => {
    const data = await fetchMealsCategories();
    setMealsCategoriesData(data);
  };

  const getMeals = async () => {
    const token = JSON.parse(localStorage.getItem('token') ?? '')    
    const data = await fetchMeals(token);
    setMealsData(data);
    setMealsInitialData(data);
  };

  const getMealsByFilter = async (filter: FilterRadioType) => {
    if (filter.radioSelected === 'f' && filter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else {
      const data = await fetchMealsByFilter(filter);
      if (data) {
        setMealsData(data);
        if (data.length === 1) navigate(`/meals/${data[0].idMeal}`);
      } else alert("Sorry, we haven't found any recipes for these filters.");
    }
  };

  const getMealsByCategory = async (category: string) => {
    if (category === currentCategoryMeals) {
      setCurrentCategoryMeals('');
      setMealsData(mealsInitialData);
    } else {
      setCurrentCategoryMeals(category);
      const data = await fetchMealsFilterByCategory(category);
      setMealsData(data);
    }
  };

  const clearCategoriesMeal = () => {
    setCurrentCategoryMeals('');
    setMealsData(mealsInitialData);
  };

  if (mealsCategoriesData.length === 0) getMealsCategories();

  if (mealsInitialData.length === 0) getMeals();

  // useEffect(() => {
  //   getMealsCategories();
  //   getMeals();
  // }, []);

  const value = {
    mealsData,
    mealsInitialData,
    mealsCategoriesData,
    getMealsByFilter,
    getMealsByCategory,
    clearCategoriesMeal,
  };

  return (
    <MealsContext.Provider value={ value }>
      { children }
    </MealsContext.Provider>
  );
}
