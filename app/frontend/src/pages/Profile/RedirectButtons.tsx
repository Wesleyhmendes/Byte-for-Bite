import { useNavigate } from 'react-router-dom';

import * as S from './Profile.styles';

function RedirectButtons() {
  const navigate = useNavigate();

  const handleNavDone = () => {
    navigate('/done-recipes');
  };

  const handleNavFav = () => {
    navigate('/favorite-recipes');
  };

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
  };
  return (
    <S.ButtonsContainer>
      <button
        data-testid="profile-done-btn"
        onClick={ handleNavDone }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ handleNavFav }
        className="favoriteBtn"
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
    </S.ButtonsContainer>
  );
}

export default RedirectButtons;
