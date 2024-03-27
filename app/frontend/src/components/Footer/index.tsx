import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const { getSelectedCategory, setByFilterURL, route } = useContext(Context);
  const handleReset = () => {
    getSelectedCategory('');
    setByFilterURL('');
  };

  const navigate = useNavigate();

  return (
    <FooterStyled
      data-testid="footer"
    >
      <div>
        <button onClick={ () => navigate(-1) }>
          <img src={ goBackIcon } alt="ícone de voltar" />
        </button>

        <Link onClick={ handleReset } aria-label="drinks-btn" to="/drinks">
          <IconDrinks src={ drinkIcon } alt="ícone de drink" className={ route } />
        </Link>

        <Link onClick={ handleReset } aria-label="meals-btn" to="/meals">
          <IconMeal src={ mealIcon } alt="ícone do drink" className={ route } />
        </Link>

        <Link onClick={ handleReset } to="/meals" aria-label="home-btn">
          <img src={ homeIcon } alt="ícone de página inicial" />
        </Link>

      </div>
    </FooterStyled>
  );
}
