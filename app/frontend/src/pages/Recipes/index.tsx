import { useContext, useState } from 'react';
import Category from '../../components/Category';
import Context from '../../context/Context';
import RecipesMiniCard from '../../components/RecipesMiniCard/RecipesMiniCard';
import * as S from './Recipes.styles';
import SelectPageButtons from './SelectPageButtons';
import AsideDesktopMenu from '../../components/AsideDesktopMenu/AsideDesktopMenu';
import Footer from '../../components/Footer';

export default function Recipes() {
  const [pageNum, setPageNum] = useState(1);
  const {
    getAllRecipes,
    getByCategory,
    getRecipesByFilter,
    getPages,
    selectedCategory,
    route,
  } = useContext(Context);

  document.title = `${route === '/meals'
    ? 'Meals | Byte for Bite'
    : 'Drinks | Byte for Bite'}`;

  const allRecipes = getAllRecipes(pageNum);
  const byCategory = getByCategory();
  const byFilter = getRecipesByFilter();
  const pages = getPages();

  const handlePageNum = (page: number) => {
    setPageNum(page);
  };

  return (
    <>
      <Category />
      <S.Main>
        <AsideDesktopMenu />
        <S.CardsContainer>
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
        </S.CardsContainer>
        <SelectPageButtons
          pages={ pages }
          handlePageNum={ handlePageNum }
          currentPage={ pageNum }
        />
        <Footer />
      </S.Main>
    </>
  );
}
