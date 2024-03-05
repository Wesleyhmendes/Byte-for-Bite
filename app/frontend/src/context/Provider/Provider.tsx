import { useLocation } from 'react-router-dom';
import Context from '../Context';
import useRecipesProvider from '../hooks/useRecipesProvider';

type ProviderProps = {
  children: React.ReactNode;  
};

export default function Provider({ children }: ProviderProps) {   
  const path = useLocation().pathname
  const route = path.includes('meals') ? '/meals' : '/drinks';
  const {    
    selectedCategory,    
    filter, 
    getCategories,   
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    setSelectedId,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
    getRecipeById,
  } = useRecipesProvider(route); 

  const value = { 
    route,   
    selectedCategory,    
    filter,
    getCategories,  
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    setSelectedId,
    getRecipesByFilter, 
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
    getRecipeById,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}