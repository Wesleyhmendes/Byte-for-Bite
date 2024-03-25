import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Recipes from '../pages/Recipes';
import Provider from '../context/Provider/Provider';
import mockMealRecipes from './mocks/mockMealRecipes';
import mockDrinkRecipe from './mocks/mockDrinkRecipes';
import RecipesMiniCard from '../components/RecipesMiniCard/RecipesMiniCard';
import { MealType } from '../type';

describe('Testa o componente Recipes', () => {
  const favoriteTestId = 'favorite-btn';
  const detailsBtnTestId = 'detailsBtn';
  test('Testa se as receitas são carregadas corretamente na rota "/meals"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <Provider>
        <Recipes />
      </Provider>,
      { route: '/meals' },
    );
    expect(window.location.pathname).toBe('/meals');
    const meal1 = await screen.findByText('Apple Frangipan Tart');
    const meal2 = await screen.findByText('Apple & Blackberry C...');
    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);
    const favoriteBtn = await screen.findAllByTestId(favoriteTestId);

    expect(meal1).toBeInTheDocument();
    expect(meal2).toBeInTheDocument();
    expect(favoriteBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toBeInTheDocument();
  });

  test('Testa se as receitas são carregadas corretamente na rota "/drinks"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockDrinkRecipe,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <Provider>
        <Recipes />
      </Provider>,
      { route: '/drinks' },
    );

    expect(window.location.pathname).toBe('/drinks');
    const drink1 = await screen.findByText('A1');
    const drink2 = await screen.findByText('ABC');
    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);
    const favoriteBtn = await screen.findAllByTestId(favoriteTestId);

    expect(drink1).toBeInTheDocument();
    expect(drink2).toBeInTheDocument();
    expect(favoriteBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toBeInTheDocument();
  });

  test('Testa se o MiniCard das receitas é renderizado corretamente"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockDrinkRecipe,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <Provider>
        <Recipes />
      </Provider>,
      { route: '/drinks' },
    );

    expect(window.location.pathname).toBe('/drinks');
    const drink1 = await screen.findByText('A1');
    const drink2 = await screen.findByText('ABC');
    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);
    const favoriteBtn = await screen.findAllByTestId(favoriteTestId);

    expect(drink1).toBeInTheDocument();
    expect(drink2).toBeInTheDocument();
    expect(favoriteBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toBeInTheDocument();
  });

  test('Testa se o botão do MiniCard renderiza corretamente"', async () => {
    const mock = { message: 'Recipe not found!' };
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mock,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <Provider>
        <RecipesMiniCard recipe={ mockMealRecipes[0] } path="/meals" index={ 0 } />
      </Provider>,
      { route: '/meals' },
    );

    expect(window.location.pathname).toBe('/meals');

    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);

    expect(detailsBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toHaveTextContent('Details');
  });
});
