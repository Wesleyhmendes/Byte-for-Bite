import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Recipes from '../pages/Recipes';
import Provider from '../context/Provider/Provider';
import mockMealRecipes from './mocks/mockMealRecipes';
import mockDrinkRecipe from './mocks/mockDrinkRecipes';
import RecipesMiniCard from '../components/RecipesMiniCard/RecipesMiniCard';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';

describe('Testa o componente Recipes', () => {
  const favoriteTestId = 'favorite-btn';
  const detailsBtnTestId = 'detailsBtn';

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Testa se as receitas são carregadas corretamente na rota "/meals"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Recipes />
        </Provider>
      </UserInfoProvider>,
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
    expect(fetchSpy).toHaveBeenCalled();
  });

  test('Testa se as receitas são carregadas corretamente na rota "/drinks"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockDrinkRecipe,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Recipes />
        </Provider>
      </UserInfoProvider>,
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
      <UserInfoProvider>
        <Provider>
          <Recipes />
        </Provider>
      </UserInfoProvider>,
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

  test('Testa se o botão do MiniCard renderiza corretamente', async () => {
    const mockData = { message: 'Recipe not found!' };
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockData,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <RecipesMiniCard recipe={ mockMealRecipes[0] } path="/meals" index={ 0 } />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals' },
    );

    expect(window.location.pathname).toBe('/meals');

    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);

    expect(detailsBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toHaveTextContent('Details');
  });

  test('Testa se ao clicar nos botões de categorias na página "/meals", aparecem as receitas corretas', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Recipes />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals' },
    );
    expect(window.location.pathname).toBe('/meals');
    const meal1 = await screen.findByText('Apple Frangipan Tart');
    const meal2 = await screen.findByText('Apple & Blackberry C...');
    const meal3 = await screen.findByText('French Onion Chicken...');
    const meal4 = await screen.findByText('Irish stew');

    const detailsBtn = await screen.findAllByTestId(detailsBtnTestId);
    const favoriteBtn = await screen.findAllByTestId(favoriteTestId);
    const chickenCategoryBtn = await screen.findByTestId('Chicken-category-filter');
    const beefCategoryBtn = await screen.findByTestId('Beef-category-filter');
    const dessertCategoryBtns = await screen.findAllByTestId('Dessert-category-filter');

    expect(meal1).toBeInTheDocument();
    expect(meal2).toBeInTheDocument();
    expect(meal3).toBeInTheDocument();
    expect(meal4).toBeInTheDocument();
    expect(favoriteBtn[0]).toBeInTheDocument();
    expect(detailsBtn[0]).toBeInTheDocument();
    expect(chickenCategoryBtn).toBeInTheDocument();
    expect(beefCategoryBtn).toBeInTheDocument();
    expect(dessertCategoryBtns[0]).toBeInTheDocument();

    await user.click(dessertCategoryBtns[0]);

    expect(meal1).toBeInTheDocument();
    expect(meal2).toBeInTheDocument();
  });
});
