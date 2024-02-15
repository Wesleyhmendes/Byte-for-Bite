import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import Profile from '../pages/Profile';

describe('Testa o componente Profile', () => {
  test('Verifica se o email e todos os botões são exibidos na tela', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'teste@teste.com' }));
    renderWithRouter(<Profile />, { route: '/profile' });

    expect(screen.getByText('teste@teste.com')).toBeInTheDocument();
    expect(screen.getByTestId('profile-done-btn')).toBeInTheDocument();
    expect(screen.getByTestId('profile-favorite-btn')).toBeInTheDocument();
    expect(screen.getByTestId('profile-logout-btn')).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão "Done Recipes" a aplicação é redirecionada para "/done-recipes"', async () => {
    const { user } = renderWithRouter(<Profile />, { route: '/profile' });

    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');
    await user.click(buttonDoneRecipes);

    expect(window.location.pathname).toBe('/done-recipes');
  });

  test('Testa se ao clicar no botão "Favorite Recipes" a aplicação é redirecionada para "/favorite-recipes"', async () => {
    const { user } = renderWithRouter(<Profile />, { route: '/profile' });

    const buttonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    await user.click(buttonFavoriteRecipes);

    expect(window.location.pathname).toBe('/favorite-recipes');
  });

  test('Testa se ao clicar no botão "Logout" a aplicação é redirecionada para "/"', async () => {
    const { user } = renderWithRouter(<Profile />, { route: '/profile' });

    const buttonLogout = screen.getByTestId('profile-logout-btn');
    await user.click(buttonLogout);

    expect(window.location.pathname).toBe('/');
  });
});
