import { fireEvent, screen } from '@testing-library/dom';
import { vi } from 'vitest';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { renderWithRouter } from './utils/renderWithRouter';
import SearchBar from '../components/SearchBar';
import Provider from '../context/Provider/Provider';
import App from '../App';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import mockMealRecipes from './mocks/mockMealRecipes';

const inputSearchId = 'search-input';
const buttonSearchId = 'exec-search-btn';
const radioIngredientId = 'ingredient-search-radio';
const radioNameId = 'name-search-radio';

afterEach(() => {
  vi.clearAllMocks();
});

describe('Testa o componente SearchBar', () => {
  test('Testa se o componente SearchBar é renderizado corretamente', () => {
    renderWithRouter(
      <Provider>
        <SearchBar />
      </Provider>,
      { route: '/meals' },
    );

    const searchInput = screen.getByTestId(inputSearchId);
    const searchButton = screen.getByTestId(buttonSearchId);
    const ingredientRadioSelect = screen.getByTestId(radioIngredientId);
    const nameRadioSelect = screen.getByTestId(radioNameId);

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(ingredientRadioSelect).toBeInTheDocument();
    expect(nameRadioSelect).toBeInTheDocument();
  });

  test('Testa se o input de busca do SearchBar funciona corretamente', async () => {
    renderWithRouter(
      <Provider>
        <SearchBar />
      </Provider>,
      { route: '/meals' },
    );

    const searchInput: HTMLInputElement = screen.getByTestId(inputSearchId);

    fireEvent.change(searchInput, { target: { value: 'teste' } });
    expect(searchInput.value).toBe('teste');
  });

  test('Testa se o botão de busca do SearchBar funciona corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const { user } = renderWithRouter(
      <GoogleOAuthProvider clientId="837825883055-16f47j4qisf0vcbpf9on5p44mclu8dlk.apps.googleusercontent.com">
        <UserInfoProvider>
          <Provider>
            <App />
          </Provider>
        </UserInfoProvider>
      </GoogleOAuthProvider>,
      { route: '/meals' },
    );

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');

    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();

    await user.click(nameRadio);
    await user.click(firstLetterRadio);
    await user.click(ingredientRadio);

    const searchInput = screen.getByTestId(inputSearchId);

    await user.type(searchInput, 'Butter');

    const searchButton = screen.getByTestId(buttonSearchId);

    user.click(searchButton);

    const recipe1 = await screen.findByText('Apple Frangipan Tart');
    const recipe2 = await screen.findByText('Apple & Blackberry C...');

    expect(recipe1).toBeInTheDocument();
    expect(recipe2).toBeInTheDocument();
  });
});
