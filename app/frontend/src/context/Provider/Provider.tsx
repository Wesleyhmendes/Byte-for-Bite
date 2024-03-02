import { useLocation } from 'react-router-dom';
import Context from '../Context';
import useRecipesProvider from '../../hooks/useRecipesProvider';

type ProviderProps = {
  children: React.ReactNode;  
};

export default function Provider({ children }: ProviderProps) {   
  const path = useLocation().pathname
  const simplifiedPath = path.includes('meals') ? '/meals' : '/drinks';
  const {    
    selectedCategory,    
    filter, 
    getCategories,   
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
  } = useRecipesProvider(simplifiedPath);

  const value = { 
    path,   
    selectedCategory,    
    filter,
    getCategories,  
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
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