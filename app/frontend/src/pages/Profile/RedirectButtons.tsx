import { useNavigate } from 'react-router-dom';

function RedirectButtons() {
  const navigate = useNavigate();

  const handleNavDone = () => {
    navigate('/done-recipes')
  }

  const handleNavFav = () => {
    navigate('/favorite-recipes')
  }

  const handleLogout = () => {
    navigate('/');
    localStorage.clear();
  }
  return (
    <>
      <button
        data-testid="profile-done-btn"
        onClick={ handleNavDone }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ handleNavFav }
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
    </>
  );
}

export default RedirectButtons;
