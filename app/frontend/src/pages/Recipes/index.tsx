import { useContext } from 'react';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';
import { Main } from './Recipes.styles';

export default function Recipes() {
  const {
    getAllRecipes, getByCategory, getRecipesByFilter, selectedCategory, route,
  } = useContext(Context);
  const allRecipes = getAllRecipes();
  const byCategory = getByCategory();
  const byFilter = getRecipesByFilter();

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
