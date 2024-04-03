import { useLocation } from 'react-router-dom';
import AsideMenu from '../AsideMenu/Aside.Menu';
import * as S from './ShortHeader.styles';
import favorite from '../../assets/Images/Header/favorite_recipes.png';
import doneRecipe from '../../assets/Images/Header/done_recipes.png';
import inProgress from '../../assets/Images/Header/in_progress_recipes.png';

function ShortHeader() {
  const route = useLocation();
  return (
    <S.Header>
      <S.OuterDiv>
        { route.pathname.endsWith('/done-recipes') && (
          <S.InnerDiv>
            <AsideMenu />
            <img className="page-logo" src={ doneRecipe } alt="done recipes logo" />
            <S.Single />
          </S.InnerDiv>
        ) }
      </S.OuterDiv>

      <S.OuterDiv>
        { route.pathname.endsWith('/favorite-recipes') && (
          <S.InnerDiv>
            <AsideMenu />
            <img className="page-logo" src={ favorite } alt="" />
            <S.Single />
          </S.InnerDiv>
        ) }
      </S.OuterDiv>

      <S.OuterDiv>
        { route.pathname.endsWith('recipes/in-progress') && (
          <S.InnerDiv>
            <AsideMenu />
            <img className="page-logo" src={ inProgress } alt="" />
            <S.Single />
          </S.InnerDiv>
        ) }
      </S.OuterDiv>
    </S.Header>
  );
}

export default ShortHeader;
