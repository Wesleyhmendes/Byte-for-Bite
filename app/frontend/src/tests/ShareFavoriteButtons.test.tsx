import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';

import FavoriteButton from '../components/FavoriteButton';

describe('Testes referentes ao FavoriteButton', () => {
  test('Testa se o botão de favoritos é renderizado', async () => {
    renderWithRouter(
      <Provider>
        <FavoriteButton id="1" recipeType="/meals" />
      </Provider>,
      { route: '/meals' },
    );

    const favButton = screen.getByTestId('favorite-btn');

    expect(favButton).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão, o método fetch é chamado', async () => {
    const { user } = renderWithRouter(
      <Provider>
        <FavoriteButton id="1" recipeType="/meals" />
      </Provider>,
      { route: '/meals' },
    );
    const fetchSpy = vi.spyOn(global, 'fetch');

    const favButton = screen.getByTestId('favorite-btn');
    await user.click(favButton);

    expect(fetchSpy).toHaveBeenCalled();
  });
});
