/* eslint-disable react-func/max-lines-per-function */
import { vi } from 'vitest';
import { createURLFilter } from '../utils/createURLFilter';
import validateLogin from '../utils/validateLogin';
import validateUser from '../utils/validateUser';
import checkInProgress from '../utils/checkInProgress';
import formatDoneRecipes from '../utils/formatDoneRecipes';

describe('Teste das funções da pasta utils', () => {
  test('Testa se createRLFilter retorna o resultado esperado', () => {
    const mockPath = '/meals';
    const mockFirstLetterRadio = 'f';
    const mockLetter = 'a';

    const result = createURLFilter(mockPath, mockFirstLetterRadio, mockLetter);

    expect(result).toBe(`${mockPath}/letter?q=${mockLetter}`);

    const mockNameRadio = 's';
    const mockName = 'beef wellington';

    const newResult = createURLFilter(mockPath, mockNameRadio, mockName);

    expect(newResult).toBe(`${mockPath}/name?q=${mockName}`);

    const mockIngredientRadio = 'i';
    const mockIngredient = 'eggs';

    const thirdResult = createURLFilter(mockPath, mockIngredientRadio, mockIngredient);

    expect(thirdResult).toBe(`${mockPath}/ingredient?q=${mockIngredient}`);
  });

  test('Testa se a função validateLogin está funcionando corretamente', () => {
    const mockUser = {
      email: 'teste@teste.com',
      password: '123456',
    };

    const result = validateLogin(mockUser);

    expect(result).toBe(true);

    const mockInvalid = {
      email: 'teste@teste',
      password: '123456',
    };

    const invalidResult = validateLogin(mockInvalid);

    expect(invalidResult).toBe(false);
  });

  test('Testa se a função validateUser está funcionando corretamente', () => {
    const mockUser = {
      email: 'teste@teste.com',
      username: 'Teste',
      password: '123456',
      confirmPassword: '123456',
      profileImage: 'minhaURLAqui',
    };

    const result = validateUser(mockUser);

    expect(result).toBe(true);

    const mockInvalid = {
      email: 'teste@teste',
      username: 'Teste',
      password: '123456',
      confirmPassword: '123456',
      profileImage: 'minhaURLAqui',
    };

    const invalidResult = validateUser(mockInvalid);

    expect(invalidResult).toBe(false);
  });

  test('Testa se a função checkInProgress está funcionando corretamente', () => {
    const mockData = { mockData: 'dadosMockados' };
    const mockFetchedData = {
      data: mockData,
      isLoading: false,
      error: undefined,
      handleFetch: vi.fn(),
      dispatch: vi.fn(),
    };

    const result = checkInProgress(mockFetchedData);

    expect(result).toBe(true);

    const invalidMockData = { message: 'dados inválidos!' };
    const invalidMockFetchedData = {
      data: invalidMockData,
      isLoading: false,
      error: undefined,
      handleFetch: vi.fn(),
      dispatch: vi.fn(),
    };

    const invaliDresult = checkInProgress(invalidMockFetchedData);

    expect(invaliDresult).toBe(false);
  });

  test('Testa se a função formatDoneRecipes retorna um objeto padrão se o segundo parametro colocado para formatação não for um array', () => {
    const invalidMockData = { message: 'não é um array' };
    const mockFetchedData = {
      data: invalidMockData,
      isLoading: false,
      error: undefined,
      handleFetch: vi.fn(),
      dispatch: vi.fn(),
    };

    const mealResult = formatDoneRecipes('/meals', mockFetchedData);
    const drinkResult = formatDoneRecipes('/drinks', mockFetchedData);

    expect(mealResult).toEqual({ userId: undefined, finishedRecipes: [] });
    expect(drinkResult).toEqual({ userId: undefined, finishedRecipes: [] });
  });
});
