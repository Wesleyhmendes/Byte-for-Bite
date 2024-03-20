import { useContext } from 'react';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';
import { Main } from './Recipes.styles';
import Category from '../../components/Category';

export default function Recipes() {
  const {
    getAllRecipes, getByCategory, getRecipesByFilter, selectedCategory, route,
  } = useContext(Context);
  const allRecipes = getAllRecipes();
  const byCategory = getByCategory();
  const byFilter = getRecipesByFilter();

  console.log(selectedCategory);

  return (
    <>
      <Category />
      <Main>
        { selectedCategory === '' && byFilter?.length === 0 ? (
          allRecipes?.map((recipe, i) => (<RecipesMiniCard
            key={ i }
            recipe={ recipe }
            path={ route }
            index={ i }
          />))
        ) : null }

        { selectedCategory !== '' && byFilter?.length === 0 ? (
          byCategory?.map((recipe, i) => (<RecipesMiniCard
            key={ i }
            recipe={ recipe }
            path={ route }
            index={ i }
          />))
        ) : null }

        { byFilter?.length > 1 ? (
          byFilter?.map((recipe, i) => (<RecipesMiniCard
            key={ i }
            recipe={ recipe }
            path={ route }
            index={ i }
          />))
        ) : null }
      </Main>
    </>
  );
}
