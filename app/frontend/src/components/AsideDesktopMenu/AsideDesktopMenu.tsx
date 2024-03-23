import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './AsideDesktopMenu.styles';

export default function AsideDesktopMenu() {
  const navigate = useNavigate();
  const url = useLocation().pathname;
  return (
    <S.Section>
      <div>
        <h2>Pages</h2>
        <button
          className={ url.endsWith('drinks') ? 'active' : '' }
          onClick={ () => navigate('/drinks') }
        >
          Drinks
        </button>
        <button
          className={ url.endsWith('meals') ? 'active' : '' }
          onClick={ () => navigate('/meals') }
        >
          Meals
        </button>
      </div>
      <div>
        <h2>Filter</h2>
        <button
          onClick={ () => navigate('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          onClick={ () => navigate('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
      </div>
    </S.Section>
  );
}
