import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import { mockAllFavorites, mockFavoriteDrink, mockFavoriteMeal } from './mocks/mockFavorite';

const buttonDrinkId = 'filter-by-drink-btn';
const buttonAllId = 'filter-by-all-btn';
const buttonMealId = 'filter-by-meal-btn';
const routeFavoriteRecipes = '/favorite-recipes';

describe('Testa o componente FavoriteRecipes', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Testa o filtro "meals" na página de favoritos', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockFavoriteMeal,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <FavoriteRecipes />,
      { route: routeFavoriteRecipes },
    );

    expect(window.location.pathname).toBe(routeFavoriteRecipes);

    const mealFilter = screen.getByTestId(buttonMealId);
    await user.click(mealFilter);
    const mealTitle = await screen.findByText('Apple Frangipan...');

    expect(mealTitle).toBeInTheDocument();
  });

  test('Testa o filtro "drinks" na página de favoritos', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockFavoriteDrink,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <FavoriteRecipes />,
      { route: routeFavoriteRecipes },
    );

    expect(window.location.pathname).toBe(routeFavoriteRecipes);

    const drinkFilter = screen.getByTestId(buttonDrinkId);
    await user.click(drinkFilter);
    const drinkTitle = await screen.findByText('A1');

    expect(drinkTitle).toBeInTheDocument();
  });

  test('Testa o filtro "all" na página de favoritos', async () => {
    const MOCK_ALL_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockAllFavorites,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_ALL_RESPONSE);

    const { user } = renderWithRouter(
      <FavoriteRecipes />,
      { route: routeFavoriteRecipes },
    );

    expect(window.location.pathname).toBe(routeFavoriteRecipes);

    const allFilter = screen.getByTestId(buttonAllId);
    await user.click(allFilter);

    const drinkTitle = await screen.findByText('A1');
    const mealTitle = await screen.findByText('Apple Frangipan...');

    expect(drinkTitle).toBeInTheDocument();
    expect(mealTitle).toBeInTheDocument();
  });
});
