import { useContext } from 'react';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';
import { useNavigate } from 'react-router-dom';

export default function Recipes() {
  const navigate = useNavigate();
  const { getAllRecipes, getByCategory, getByRecipesByFilter, selectedCategory, path } = useContext(Context)
  const allRecipes = getAllRecipes(path);
  const byCategory = getByCategory(path);
  const byFilter = getByRecipesByFilter();
  
  if (path === '/meals' && byFilter?.length === 1) {
    navigate(`/meals/${byFilter[0].idMeal}`);
  }
  if (path === '/drinks' && byFilter?.length === 1) {
    navigate(`/meals/${byFilter[0].idDrink}`);
  }

  return (
    <main>
      <Category />
      {selectedCategory === '' ? (
        allRecipes?.map((recipe, i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ): null}

      {selectedCategory !== '' ? (
        byCategory?.map((recipe,i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ) : null} 

      {byFilter?.length > 1 ? (
        byFilter?.map((recipe, i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ) : null}    
    </main>
  );
}
