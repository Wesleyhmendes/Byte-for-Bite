import { Link } from 'react-router-dom';
import logo from '../../assets/Images/BfB_Logo.png';

import * as S from './NotFound.style';

function NotFound() {
  return (
    <S.NotFoundMain>
      <S.NotFoundContainer>
        <img src={ logo } alt="byte-for-bite not found" />
        <h2>Page not found!</h2>
        <Link to="/meals">
          Return to home
        </Link>
      </S.NotFoundContainer>
    </S.NotFoundMain>
  );
}

export default NotFound;
