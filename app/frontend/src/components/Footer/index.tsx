import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import style from './style.module.css';
import { useContext } from 'react';
import Context from '../../context/Context';

export default function Footer() {
  const { getSelectedCategory } = useContext(Context)
  return (
    <footer
      className={ style.footer }
      data-testid="footer"
    >
      <Link onClick={ () => getSelectedCategory('') } to="/drinks">
        <img src={ drinkIcon } alt="ícone de drink" data-testid="drinks-bottom-btn" />
      </Link>

      <Link onClick={ () => getSelectedCategory('') } to="/meals">
        <img src={ mealIcon } alt="ícone do drink" data-testid="meals-bottom-btn" />
      </Link>

    </footer>
  );
}
