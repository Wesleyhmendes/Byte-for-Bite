import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { vi } from 'vitest';
import { useState } from 'react';
import { renderHook } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';
import SearchBar from '../components/SearchBar';
import Provider from '../context/Provider/Provider';
import mockMealRecipes from './mocks/mockMealRecipes';
import Recipes from '../pages/Recipes';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import App from '../App';

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

  //   const clickSpy = vi.spyOn(SearchBar.prototype, 'handleSubmit');

  //   const searchButton = screen.getByTestId(buttonSearchId);

  //   fireEvent.click(searchButton);

  //   expect(clickSpy).toHaveBeenCalledTimes(1);
  // });
});
