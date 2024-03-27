import { fireEvent, screen } from '@testing-library/dom';
import { vi } from 'vitest';

import { renderWithRouter } from './utils/renderWithRouter';
import SearchBar from '../components/SearchBar';
import Provider from '../context/Provider/Provider';

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

  // test('Testa se o botão de busca do SearchBar funciona corretamente', async () => {
  //   renderWithRouter(
  //     <Provider>
  //       <SearchBar />
  //     </Provider>,
  //     { route: '/meals' },
  //   );

  //   const clickSpy = vi.spyOn(global, 'SubmitEvent');

  //   const searchButton = screen.getByTestId(buttonSearchId);

  //   fireEvent.click(searchButton);

  //   expect(clickSpy).toHaveBeenCalledTimes(1);
  // });
});
