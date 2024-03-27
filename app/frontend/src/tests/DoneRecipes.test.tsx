import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import DoneRecipes from '../pages/DoneRecipes';
import { mockAllFinished, mockFinishedDrink, mockFinishedMeal } from './mocks/mockFinished';

const buttonDrinkId = 'filter-by-drink-btn';
const buttonAllId = 'filter-by-all-btn';
const buttonMealId = 'filter-by-meal-btn';
const routeDoneRecipes = '/done-recipes';

describe('Testa o componente DoneRecipes', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Testa se o filtro "meals" funciona corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockFinishedMeal,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <DoneRecipes />,
      { route: routeDoneRecipes },
    );

    expect(window.location.pathname).toBe(routeDoneRecipes);

    const mealFilter = screen.getByTestId(buttonMealId);
    await user.click(mealFilter);
    const mealTitle = await screen.findByText('Apple Frangipan...');

    expect(mealTitle).toBeInTheDocument();
  });

  test('Testa se o filtro "drinks" funciona corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockFinishedDrink,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <DoneRecipes />,
      { route: routeDoneRecipes },
    );

    expect(window.location.pathname).toBe(routeDoneRecipes);

    const drinkFilter = screen.getByTestId(buttonDrinkId);
    await user.click(drinkFilter);
    const drinkTitle = await screen.findByText('A1');

    expect(drinkTitle).toBeInTheDocument();
  });

  test('Testa se o filtro "all" funciona corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockAllFinished,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <DoneRecipes />,
      { route: routeDoneRecipes },
    );

    expect(window.location.pathname).toBe(routeDoneRecipes);

    const allFilter = screen.getByTestId(buttonAllId);
    await user.click(allFilter);
    const mealTitle = await screen.findByText('Apple Frangipan...');
    const drinkTitle = await screen.findByText('A1');

    expect(mealTitle).toBeInTheDocument();
    expect(drinkTitle).toBeInTheDocument();
  });
});
