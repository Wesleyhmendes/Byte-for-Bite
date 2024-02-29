import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Context from '../Context';
import { useState } from 'react';
import useProvider from '../../hooks/useProvider';

type ProviderProps = {
  children: React.ReactNode;  
};

export default function Provider({ children }: ProviderProps) {   
  const path = useLocation().pathname
  const { mealsCategories, drinksCategories, selectedCategory, allRecipes, byCategory, getByCategory } = useProvider(path)

  const value = {
    path,
    mealsCategories,
    drinksCategories,
    selectedCategory,
    byCategory,
    allRecipes,
    getByCategory,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}