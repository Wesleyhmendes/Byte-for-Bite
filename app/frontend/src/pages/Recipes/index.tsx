import { useContext } from 'react';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';

export default function Recipes() {
  const { getAllRecipes, getByCategory, selectedCategory, path } = useContext(Context)
  const allRecipes = getAllRecipes(path);
  const byCategory = getByCategory(path);

  return (
    <main>
      <Category />
      {selectedCategory === '' ? (
        allRecipes?.map((recipe, i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ): null}

      {selectedCategory !== '' ? (
        byCategory?.map((recipe,i) => <RecipesMiniCard key={i} recipe={recipe} path={path} index={i}/>)
      ) : null}      
      
    </main>
  );
}
