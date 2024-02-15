import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import style from './style.module.css';

export default function Footer() {
  return (
    <footer
      className={ style.footer }
      data-testid="footer"
    >
      <Link to="/drinks">
        <img src={ drinkIcon } alt="ícone de drink" data-testid="drinks-bottom-btn" />
      </Link>

      <Link to="/meals">
        <img src={ mealIcon } alt="ícone do drink" data-testid="meals-bottom-btn" />
      </Link>

    </footer>
  );
}
