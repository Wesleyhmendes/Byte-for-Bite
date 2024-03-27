import { Link } from 'react-router-dom';
import { useContext } from 'react';
import verifiedIcon from '../../assets/Icons/AsideMenuDesktop/done_icon.png';
import favoriteIcon from '../../assets/Icons/AsideMenuDesktop/favorite_icon.png';
import glassIcon from '../../assets/Icons/AsideMenuDesktop/glass-icon32.png';
import plateIcon from '../../assets/Icons/AsideMenuDesktop/plate-icon32.png';
import * as S from './AsideDesktopMenu.styles';
import Context from '../../context/Context';

export default function AsideDesktopMenu() {
  const {
    getSelectedCategory,
    setByFilterURL,
    route,
    filterDispatch,
  } = useContext(Context);

  const RESET = 'RESET';
  const handleReset = () => {
    getSelectedCategory('');
    setByFilterURL('');
    filterDispatch({ type: RESET });
  };

  return (
    <S.Section>
      <div>
        <h2>Pages</h2>
        <S.ButtonDiv>
          <Link
            to="/drinks"
            onClick={ handleReset }
          >
            <img className="glass" src={ glassIcon } alt="icon of a glass" />
            <p
              className={ route === '/drinks' ? 'active' : '' }
            >
              Drinks
            </p>
          </Link>
        </S.ButtonDiv>
        <S.ButtonDiv>
          <Link
            to="/meals"
            onClick={ handleReset }
          >
            <img className="glass" src={ plateIcon } alt="icon of a glass" />
            <p
              className={ route === '/meals' ? 'active' : '' }
            >
              Meals
            </p>
          </Link>
        </S.ButtonDiv>
      </div>
      <div>
        <h2>Filter</h2>
        <S.ButtonDiv>
          <Link
            to="/done-recipes"
            onClick={ handleReset }
          >
            <img src={ verifiedIcon } alt="verified icon" />
            <p>Done Recipes</p>
          </Link>
        </S.ButtonDiv>
        <S.ButtonDiv>
          <Link
            to="/favorite-recipes"
            onClick={ handleReset }
          >
            <img src={ favoriteIcon } alt="verified icon" />
            <p>Favorite Recipes</p>
          </Link>
        </S.ButtonDiv>
      </div>
    </S.Section>
  );
}
