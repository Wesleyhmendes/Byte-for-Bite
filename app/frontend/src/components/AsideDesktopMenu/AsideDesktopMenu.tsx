import { useLocation, useNavigate } from 'react-router-dom';
import verifiedIcon from '../../assets/Icons/AsideMenuDesktop/done_icon.png';
import favoriteIcon from '../../assets/Icons/AsideMenuDesktop/favorite_icon.png';
import glassIcon from '../../assets/Icons/AsideMenuDesktop/glass-icon32.png';
import plateIcon from '../../assets/Icons/AsideMenuDesktop/plate-icon32.png';
import * as S from './AsideDesktopMenu.styles';

export default function AsideDesktopMenu() {
  const navigate = useNavigate();
  const url = useLocation().pathname;
  return (
    <S.Section>
      <div>
        <h2>Pages</h2>
        <S.ButtonDiv>
          <img className="glass" src={ glassIcon } alt="icon of a glass" />
          <button
            className={ url.endsWith('drinks') ? 'active' : '' }
            onClick={ () => navigate('/drinks') }
          >
            <p>Drinks</p>
          </button>
        </S.ButtonDiv>
        <S.ButtonDiv>
          <img src={ plateIcon } alt="icon of a plate" />
          <button
            className={ url.endsWith('meals') ? 'active' : '' }
            onClick={ () => navigate('/meals') }
          >
            <p>Meals</p>
          </button>
        </S.ButtonDiv>
      </div>
      <div>
        <h2>Filter</h2>
        <S.ButtonDiv>
          <img src={ verifiedIcon } alt="verified icon" />
          <button
            onClick={ () => navigate('/done-recipes') }
          >
            <p>Done Recipes</p>
          </button>
        </S.ButtonDiv>
        <S.ButtonDiv>
          <img src={ favoriteIcon } alt="verified icon" />
          <button
            onClick={ () => navigate('/favorite-recipes') }
          >
            <p>Favorite Recipes</p>
          </button>
        </S.ButtonDiv>
      </div>
    </S.Section>
  );
}
