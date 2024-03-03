import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DrinkType, FilterRadioType } from '../../type';
import DrinksContext from './DrinksContext';
import {
  fetchDrinks,
  fetchDrinksByFilter,
  fetchDrinksCategories,
  fetchDrinksFilterByCategory,
} from '../../services/fetchApi';
import mapCategories from '../../utils/mapCategories';

type DrinksProviderProps = {
  children: React.ReactNode;
};

export default function DrinksProvider({ children }: DrinksProviderProps) {
  const [drinksData, setDrinksData] = useState<DrinkType[]>([]);
  const [drinksInitialData, setDrinksInitialData] = useState([]);
  const [drinksCategoriesData, setDrinksCategoriesData] = useState([]);
  const [currentCategoryDrinks, setCurrentCategoryDrinks] = useState('');   
  
  const navigate = useNavigate();    

  const getDrinksCategories = async () => {  
    const data = await fetchDrinksCategories(); 
    setDrinksCategoriesData(data);   
  }; 

  const getDrinks = async () => {
   
    const data = await fetchDrinks();
    setDrinksData(data);
    setDrinksInitialData(data);
  };

  const getDrinksByFilter = async (filter: FilterRadioType) => {
    if (filter.radioSelected === 'f' && filter.search.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else {
      const data = await fetchDrinksByFilter(filter);
      if (data) {
        setDrinksData(data);
        if (data.length === 1) navigate(`/drinks/${data[0].idDrink}`);
      } else alert("Sorry, we haven't found any recipes for these filters.");
    }
  };

  const getDrinksByCategory = async (category: string) => {
    const categoryNumber = mapCategories(category);
    if (category === currentCategoryDrinks) {
      setCurrentCategoryDrinks('');
      setDrinksData(drinksInitialData);
    } else {
      setCurrentCategoryDrinks(category);
      const data = await fetchDrinksFilterByCategory(categoryNumber);
      setDrinksData(data);
    }
  };

  const clearCategoriesDrink = () => {
    setCurrentCategoryDrinks('');
    setDrinksData(drinksInitialData);
  };

  if (drinksCategoriesData.length === 0) getDrinksCategories();

  if (drinksInitialData.length === 0) getDrinks();

  // useEffect(() => { 
  //   // getDrinksCategories();
  //   getDrinks();
    
  // }, []);

  const value = {
    drinksData,
    drinksInitialData,
    drinksCategoriesData,
    getDrinksByFilter,
    getDrinksByCategory,
    clearCategoriesDrink,        
  };

  return (
    <DrinksContext.Provider value={ value }>
      { children }
    </DrinksContext.Provider>
  );
}
