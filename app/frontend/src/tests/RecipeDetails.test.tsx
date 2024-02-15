import { screen, waitFor } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import App from '../App';

const testLocalStorage = {
  drinks: {},
  meals: {
    52771: [],
  },
};

const srcWhiteHeart = '/src/images/whiteHeartIcon.svg';
const linkMealArrabiata = '/meals/52771';
const recipeTitleId = 'recipe-title';

describe('Testa o componente RecipeDetails', () => {
  test('Testa se a página de detalhes de receita de uma bebida é renderizada corretamente', async () => {
    renderWithRouter(<App />, { route: '/drinks/178319' });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });
  });

  test('Testa se é possível favoritar uma receita de comida e se o src da imagem é alterado', async () => {
    const { user } = renderWithRouter(<App />, { route: linkMealArrabiata });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });

    const favoriteButton = screen.getByTestId('favorite-btn');

    expect(favoriteButton).toHaveAttribute('src', srcWhiteHeart);
    await user.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute('src', '/src/images/blackHeartIcon.svg');
    await user.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute('src', srcWhiteHeart);
  });

  test('Testa se é possível favoritar uma receita de bebida e se o src da imagem é alterado', async () => {
    const { user } = renderWithRouter(<App />, { route: '/drinks/178319' });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });

    const favoriteButton = screen.getByTestId('favorite-btn');

    expect(favoriteButton).toHaveAttribute('src', srcWhiteHeart);
    await user.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute('src', '/src/images/blackHeartIcon.svg');
    await user.click(favoriteButton);

    expect(favoriteButton).toHaveAttribute('src', srcWhiteHeart);
  });

  test('Testa se ao clicar no botão compartilhar o texto "Link copied!" é exibido na tela e o link é copiado com sucesso', async () => {
    const { user } = renderWithRouter(<App />, { route: linkMealArrabiata });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });

    const shareButton = screen.getByTestId('share-btn');
    user.click(shareButton);

    await screen.findByText('Link copied!');
  });

  test('Testa se ao clicar no botão "Start Recipe" a aplicação é redirecionada para a página de receita em progresso', async () => {
    const { user } = renderWithRouter(<App />, { route: linkMealArrabiata });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });

    const startRecipeButton = screen.getByTestId('start-recipe-btn');
    await user.click(startRecipeButton);

    expect(window.location.pathname).toBe('/meals/52771/in-progress');
  });

  test('Testa se o botão "Continue Recipe" é exibido na tela de uma receita já iniciada', async () => {
    localStorage.setItem('inProgressRecipes', JSON.stringify(testLocalStorage));

    renderWithRouter(<App />, { route: linkMealArrabiata });

    await waitFor(() => {
      screen.getByTestId(recipeTitleId);
    }, { timeout: 5000 });

    screen.getByTestId('start-recipe-btn');

    screen.getByText('Continue Recipe');
  });
});
