import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [userEmail, setUserEmail] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const { email } = JSON.parse(localStorage.getItem('user') as string);
      if (email) setUserEmail(email);
    }
  }, []);

  return (
    <main>
      <p data-testid="profile-email">{userEmail}</p>
      <button
        data-testid="profile-done-btn"
        onClick={ () => navigate('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        data-testid="profile-favorite-btn"
        onClick={ () => navigate('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        data-testid="profile-logout-btn"
        onClick={ () => {
          navigate('/');
          localStorage.clear();
        } }
      >
        Logout
      </button>
    </main>
  );
}
