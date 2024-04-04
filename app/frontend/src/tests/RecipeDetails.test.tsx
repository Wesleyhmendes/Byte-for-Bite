import { screen, waitFor } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import mockMealRecipes from './mocks/mockMealRecipes';
import Provider from '../context/Provider/Provider';
import RecipeDetails from '../pages/RecipeDetails';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import mockDrinkRecipe from './mocks/mockDrinkRecipes';
import MealCard from '../components/MealCard';
import App from '../App';

describe('Testa o componente RecipeDetails', () => {
  const startRecipeBtnTestId = 'start-recipe-btn';
  test('Testa se uma receita de meals é renderizada corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes[0],
    } as Response;

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <RecipeDetails />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1' },
    );
    const recipeImage = await screen.findByLabelText('recipe-image');
    const mealTitle = await screen.findByText('Apple Frangipan Tart');
    const mealCategory = await screen.findByTestId('recipe-category');
    const mealFirstIngredient = await screen.findByTestId('0-ingredient-name');
    const firstIngredientMeasure = await screen.findByTestId('0-ingredient-measure');
    const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

    expect(window.location.pathname).toBe('/meals/1');
    expect(fetchSpy).toHaveBeenCalled();
    expect(recipeImage).toBeInTheDocument();
    expect(mealTitle).toBeInTheDocument();
    expect(mealCategory).toBeInTheDocument();
    expect(mealFirstIngredient).toBeInTheDocument();
    expect(firstIngredientMeasure).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });

  test('Testa se uma receita de drinks é renderizada corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockDrinkRecipe[0],
    } as Response;

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <RecipeDetails />
        </Provider>
      </UserInfoProvider>,
      { route: '/drinks/1' },
    );
    const recipeImage = await screen.findByLabelText('recipe-image');
    const drinkTitle = await screen.findByText('A1');
    const drinkCategory = await screen.findByTestId('recipe-category');
    const drinkFirstIngredient = await screen.findByTestId('0-ingredient-name');
    const firstIngredientMeasure = await screen.findByTestId('0-ingredient-measure');
    const startRecipeBtn = await screen.findByTestId(startRecipeBtnTestId);

    expect(window.location.pathname).toBe('/drinks/1');
    expect(fetchSpy).toHaveBeenCalled();
    expect(recipeImage).toBeInTheDocument();
    expect(drinkTitle).toBeInTheDocument();
    expect(drinkCategory).toBeInTheDocument();
    expect(drinkFirstIngredient).toBeInTheDocument();
    expect(firstIngredientMeasure).toBeInTheDocument();
    expect(startRecipeBtn).toBeInTheDocument();
  });

  test('Testa se a função handleInProgress funciona corretamente', async () => {
    const mockRecipe = mockMealRecipes[0];
    const handleInProgressSpy = vi.fn();
    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <MealCard
            recipeData={ mockRecipe }
            handleInProgress={ handleInProgressSpy }
            buttonText="Start recipe"
          />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1' },
    );

    const startBtn = screen.getByTestId(startRecipeBtnTestId);
    await user.click(startBtn);

    expect(handleInProgressSpy).toHaveBeenCalled();
  });

  test('Testa se iniciar uma receita, leva para a pagina in progress referente a ela', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes[0],
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    vi.useFakeTimers({ shouldAdvanceTime: true });

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <App />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1' },
    );

    const startBtn = await screen.findByTestId(startRecipeBtnTestId);
    await user.click(startBtn);
    vi.advanceTimersByTime(2000);
    await waitFor(() => {
      expect(window.location.pathname).toBe('/meals/1/in-progress');
    });
  });

  test('Testa se o botão antes de iniciar uma receita aparece como "Start recipe"', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <App />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1' },
    );

    const startBtn = await screen.findByTestId(startRecipeBtnTestId);
    expect(startBtn).toHaveTextContent('Start recipe');
  });
});
