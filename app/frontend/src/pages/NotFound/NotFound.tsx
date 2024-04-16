import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/Images/not-found.gif';

import * as S from './NotFound.style';

function NotFound() {
  return (
    <S.NotFoundMain>
        <img src={ notFoundImg } alt="byte-for-bite not found" />
        <h2>Ops... Page not found!</h2>
        <Link to="/meals">
          Return to home
        </Link>
    </S.NotFoundMain>
  );
}

export default NotFound;
