import { useContext } from 'react';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';

export default function Recipes() {  
  const { getAllRecipes, getByCategory, getRecipesByFilter, selectedCategory, path } = useContext(Context)
  const allRecipes = getAllRecipes();
  const byCategory = getByCategory();
  const byFilter = getRecipesByFilter();  

  return (
    <main>
      <Category />
      {selectedCategory === '' && byFilter?.length === 0 ? (
        allRecipes?.map((recipe, i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ): null}

      {selectedCategory !== '' && byFilter?.length === 0 ? (
        byCategory?.map((recipe,i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ) : null} 

      {byFilter?.length > 1 ? (
        byFilter?.map((recipe, i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ) : null}
    </main>
  );
}
