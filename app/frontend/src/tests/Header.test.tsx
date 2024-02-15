import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import Header from '../components/Header';

const profileId = 'profile-top-btn';
const buttonActiveInputId = 'search-top-btn';

describe('Testa o componente Header', () => {
  test('Testa se os ícones de perfil e o botão que ativa a barra de pesquisas estão presentes', () => {
    renderWithRouter(<Header />, { route: '/meals' });

    expect(screen.getByTestId(profileId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonActiveInputId)).toBeInTheDocument();
  });

  test('Testa se ao clicar no ícone profile a aplicação é redirecionada para a rota "/profile"', async () => {
    const { user } = renderWithRouter(<Header />, { route: '/meals' });

    expect(window.location.pathname).toBe('/meals');

    const profileButton = screen.getByTestId(profileId);
    await user.click(profileButton);

    expect(window.location.pathname).toBe('/profile');
  });

  test('Testa se ao clicar no botão search o input de pesquisa fica visível', async () => {
    const { user } = renderWithRouter(<Header />, { route: '/meals' });

    const searchButton = screen.getByTestId(buttonActiveInputId);
    await user.click(searchButton);

    screen.getByTestId('search-input');
  });
});
