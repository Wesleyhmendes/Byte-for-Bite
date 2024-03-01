import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../Context';
import useProvider from '../../hooks/useProvider';

type ProviderProps = {
  children: React.ReactNode;  
};

export default function Provider({ children }: ProviderProps) {   
  const path = useLocation().pathname
  const {
    mealsCategories,
    drinksCategories,
    selectedCategory,    
    filter,    
    filterDispatch,
    setRecipesFilter,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  } = useProvider(path);

  const value = {    
    mealsCategories,
    drinksCategories,
    selectedCategory,    
    filter,    
    filterDispatch,
    setRecipesFilter,
    getRecipesByFilter, 
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}