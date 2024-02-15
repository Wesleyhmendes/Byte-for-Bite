import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import SearchBar from '../components/SearchBar';
import MealsProvider from '../context/MealContext/MealsProvider';
import DrinksProvider from '../context/DrinkContext/DrinksProvider';

const inputSearchId = 'search-input';
const buttonSearchId = 'exec-search-btn';
const radioIngredientId = 'ingredient-search-radio';
const radioNameId = 'name-search-radio';

afterEach(() => {
  vi.clearAllMocks();
});

describe('Testa o componente SearchBar', () => {
  test('Testa se o input, os 3 radio buttons e o botão de pesquisar estão presentes', async () => {
    renderWithRouter(<SearchBar />);

    expect(screen.getByTestId(inputSearchId)).toBeInTheDocument();
    expect(screen.getByTestId(buttonSearchId)).toBeInTheDocument();
    expect(screen.getByTestId(radioIngredientId)).toBeInTheDocument();
    expect(screen.getByTestId(radioNameId)).toBeInTheDocument();
    expect(screen.getByTestId('first-letter-search-radio')).toBeInTheDocument();
  });

  test('Testa se a pesquisa por ingrediente é realizada corretamente', async () => {
    const { user } = renderWithRouter(
      <MealsProvider>
        <SearchBar />
      </MealsProvider>,
      { route: '/meals' },
    );

    const inputSearch = screen.getByTestId(inputSearchId);
    await user.type(inputSearch, 'salmon');

    const radioIngredient = screen.getByTestId(radioIngredientId);
    await user.click(radioIngredient);

    const buttonSearch = screen.getByTestId(buttonSearchId);
    await user.click(buttonSearch);
  });

  test('Testa se a pesquisa por name é realizada corretamente', async () => {
    const { user } = renderWithRouter(<SearchBar />);

    const inputSearch = screen.getByTestId(inputSearchId);
    await user.type(inputSearch, 'arrabiata');

    const radioName = screen.getByTestId(radioNameId);
    await user.click(radioName);

    const buttonSearch = screen.getByTestId(buttonSearchId);
    await user.click(buttonSearch);
  });

  test('Testa se a pesquisa por primeira letra é realizada corretamente', async () => {
    const { user } = renderWithRouter(<SearchBar />);

    const inputSearch = screen.getByTestId(inputSearchId);
    await user.type(inputSearch, 'd');

    const radioFirstLetter = screen.getByTestId('first-letter-search-radio');
    await user.click(radioFirstLetter);

    const buttonSearch = screen.getByTestId(buttonSearchId);
    await user.click(buttonSearch);
  });

  test('Testa se a pesquisa por name é realizada corretamente na rota drink', async () => {
    const { user } = renderWithRouter(
      <DrinksProvider>
        <SearchBar />
      </DrinksProvider>,
      { route: '/drinks' },
    );

    const inputSearch = screen.getByTestId(inputSearchId);
    await user.type(inputSearch, 'aquamarine');

    const radioName = screen.getByTestId(radioNameId);
    await user.click(radioName);

    const buttonSearch = screen.getByTestId(buttonSearchId);
    await user.click(buttonSearch);
  });
});
