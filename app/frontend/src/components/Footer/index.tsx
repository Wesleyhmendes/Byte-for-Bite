import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import drinkIcon from '../../assets/Icons/glass-wine.svg';
import goBackIcon from '../../assets/Icons/go-back-icon.svg';
import homeIcon from '../../assets/Icons/home-icon.svg';
import mealIcon from '../../assets/Icons/plate-icon.png';
import Context from '../../context/Context';
import {
  FooterStyled,
  IconMeal,
  IconDrinks,
} from './Footer.styles';

export default function Footer() {
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

  const navigate = useNavigate();
  const currentRoute = useLocation().pathname;
  return (
    <FooterStyled
      data-testid="footer"
    >
      <div>
        <button onClick={ () => navigate(-1) }>
          <img src={ goBackIcon } alt="ícone de voltar" />
        </button>

        <Link onClick={ handleReset } aria-label="drinks-btn" to="/drinks">
          <IconDrinks src={ drinkIcon } alt="ícone de drink" route={ currentRoute } />
        </Link>

        <Link onClick={ handleReset } aria-label="meals-btn" to="/meals">
          <IconMeal src={ mealIcon } alt="ícone do drink" route={ currentRoute } />
        </Link>

        <Link onClick={ handleReset } to="/meals" aria-label="home-btn">
          <img src={ homeIcon } alt="ícone de página inicial" />
        </Link>

      </div>
    </FooterStyled>
  );
}
