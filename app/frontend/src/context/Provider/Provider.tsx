import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Context from '../Context';
import { useState } from 'react';
import useProvider from '../../hooks/useProvider';

type ProviderProps = {
  children: React.ReactNode;  
};

export default function Provider({ children }: ProviderProps) {  
  const path = useLocation().pathname === '/meals' ? 'meals' : 'drinks'
  const { categories, selectedCategory, allRecipes, byCategory, getByCategory } = useProvider(path)

  const value = {
    path,
    categories,
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