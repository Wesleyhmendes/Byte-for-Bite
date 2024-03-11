import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import drinkIcon from '../../assets/Icons/glass-wine.svg';
import goBackIcon from '../../assets/Icons/go-back-icon.svg';
import homeIcon from '../../assets/Icons/home-icon.svg';
import mealIcon from '../../assets/Icons/plate-icon.png';
import Context from '../../context/Context';
import {
  FooterStyled,
  Icon,
  IconMeal,
  IconDrinks,
  Button,
} from './Footer.styles';

export default function Footer() {
  const { getSelectedCategory, setByFilterURL } = useContext(Context);
  const handleReset = () => {
    getSelectedCategory('');
    setByFilterURL('');
  };

  const { route } = useContext(Context);
  const navigate = useNavigate();

  return (
    <FooterStyled
      data-testid="footer"
    >
      <Button onClick={ () => navigate(-1) }>
        <Icon src={ goBackIcon } alt="ícone de drink" />
      </Button>

      <Link onClick={ handleReset } to="/drinks">
        <IconDrinks src={ drinkIcon } alt="ícone de drink" className={ route } />
      </Link>

      <Link onClick={ handleReset } to="/meals">
        <IconMeal src={ mealIcon } alt="ícone do drink" className={ route } />
      </Link>

      <Link to="/meals">
        <Icon src={ homeIcon } alt="ícone de drink" />
      </Link>

    </FooterStyled>
  );
}
