import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import RecipeInProgress from '../pages/RecipeInProgress';
import mockMealRecipes from './mocks/mockMealRecipes';
import RecipeIngredients from '../pages/RecipeInProgress/RecipeIngredients';
import getIngredients from '../utils/getIngredients';
import mockStateIngredients from './mocks/mockStateIngredients';
import getRecipeCategory from '../utils/getRecipeCategory';
import mockDrinkRecipe from './mocks/mockDrinkRecipes';

describe('Testa o componente RecipesInProgress', () => {
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
          <RecipeInProgress />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1/in-progress' },
    );

    const recipeTitle = await screen.findByTestId('recipe-title');
    const recipeCategory = await screen.findByTestId('recipe-category');
    const recipeIngredients = await screen.findByTestId('0-ingredient-step');
    const recipeInstruction = await screen.findByLabelText('instruction-1');
    const finishRecipeBtn = await screen.findByLabelText('finishRecipe-btn');

    expect(fetchSpy).toHaveBeenCalled();
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeCategory).toBeInTheDocument();
    expect(recipeCategory).toHaveTextContent('Dessert');
    expect(recipeIngredients).toBeInTheDocument();
    expect(recipeInstruction).toBeInTheDocument();
    expect(finishRecipeBtn).toBeInTheDocument();
  });

  test('Testa se o componente RecipeIngredients se comporta da forma esperada', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes[0],
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const ingredients = getIngredients(mockMealRecipes[0]);
    const handleChangeSpy = vi.fn();

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <RecipeIngredients
            recipeData={ mockMealRecipes[0] }
            ingredients={ ingredients }
            handleChange={ handleChangeSpy }
            stateIngredients={ mockStateIngredients }
          />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals/1/in-progress' },
    );

    const recipeIngredients = await screen.findByTestId('0-ingredient-step');
    const mealCategory = getRecipeCategory('Meal', mockMealRecipes[0]);
    const drinkCategory = getRecipeCategory('Drink', mockDrinkRecipe[0]);

    await user.click(recipeIngredients);

    expect(recipeIngredients).toBeInTheDocument();
    expect(recipeIngredients).not.toBeChecked();
    expect(mealCategory).toBe('Dessert');
    expect(drinkCategory).toBe('Alcoholic');
    expect(handleChangeSpy).toHaveBeenCalled();
  });
});
