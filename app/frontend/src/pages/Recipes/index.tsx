import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';
import * as S from './Recipes.styles';
import SelectPageButtons from './SelectPageButtons';
import AsideDesktopMenu from '../../components/AsideDesktopMenu/AsideDesktopMenu';
import Footer from '../../components/Footer';
import bin from '../../assets/Icons/bin.png';
import ClearFilter from '../../components/ClearFilter/ClearFilter';

export default function Recipes() {
  const [pageNum, setPageNum] = useState(1);
  const navigate = useNavigate();
  const {
    getRecipesByPage,
    recipesByFilter,
    byFilterPages,
    allRecipesPages,
    allRecipes,
    filter,
    route,
  } = useContext(Context);

  document.title = `${route === '/meals'
    ? 'Meals | Byte for Bite'
    : 'Drinks | Byte for Bite'}`;

  const allRecipesByPage = getRecipesByPage(allRecipes, pageNum);
  const byFilter = getRecipesByPage(recipesByFilter, pageNum);

  const handlePageNum = (page: number) => {
    setPageNum(page);
  };

  useEffect(() => {
    const recipeType = route === '/meals' ? 'Meal' : 'Drink';
    if (byFilter.length === 1) {
      navigate(`${route}/${byFilter[0][`id${recipeType}`]}`);
    }
  }, [byFilter, navigate, route]);

  return (
    <>
      <Category />
      <S.Main>
        <AsideDesktopMenu />
        <S.CardAndClear>
        <ClearFilter byFilter={ byFilter.length } filter={filter.searchActive} />
          <S.CardsContainer>
            { !filter.searchActive ? (
              allRecipesByPage.map((recipe, i) => (<RecipesMiniCard
                key={ i }
                recipe={ recipe }
                path={ route }
                index={ i }
              />))
            ) : null }

            { byFilter.length > 1 ? (
              byFilter.map((recipe, i) => (<RecipesMiniCard
                key={ i }
                recipe={ recipe }
                path={ route }
                index={ i }
              />))
            ) : null }

            { (byFilter.length === 0 && filter.searchActive) && (
              <S.ClearFilter>
                <p>Recipe not found.</p>
              </S.ClearFilter>
            )}

          </S.CardsContainer>
        </S.CardAndClear>
        { (allRecipesPages.length > 1 || byFilterPages.length > 1) && (
          <SelectPageButtons
            pages={ !filter.searchActive ? allRecipesPages : byFilterPages }
            handlePageNum={ handlePageNum }
            currentPage={ pageNum }
          />
        ) }
        <Footer />
      </S.Main>
    </>
  );
}
