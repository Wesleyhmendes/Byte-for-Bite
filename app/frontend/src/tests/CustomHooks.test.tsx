/* eslint-disable react-func/max-lines-per-function */
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import useRecipesProvider from '../hooks/useRecipesProvider';
import mockMealRecipes from './mocks/mockMealRecipes';
import useSearchBar from '../hooks/useSearchBar';
import useCheckIngredients from '../hooks/useCheckIngredients';
import useSignUp from '../hooks/useSignUp';

describe('Testes referentes aos custom hooks criados', async () => {
  test('Testa o useRecipesProvider', () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    const mockData = {
      data: mockMealRecipes,
      isLoading: false,
      error: undefined,
      handleFetch: vi.fn(),
      dispatch: vi.fn(),
    };

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { result, rerender } = renderHook(() => useRecipesProvider('/meals'));
    rerender();

    const { filter, allRecipes, formattedFavorites, recipesByFilter, allRecipesPages, byFilterPages } = result.current;

    expect(filter).toEqual(
      {
        radioSelected: 'i',
        search: '',
        searchActive: false,
      },
    );

    expect(fetchSpy).toHaveBeenCalled();
    expect(allRecipes).toEqual([]);
    expect(recipesByFilter).toEqual([]);
    expect(allRecipesPages).toEqual([]);
    expect(byFilterPages).toEqual([]);
    expect(formattedFavorites).toEqual(undefined);

    act(() => result.current.setRecipesFilter({ radioSelected: 's', search: 'Eggs', searchActive: true }));

    const mockRecipe = result.current.getRecipes(mockData, 'Dessert');
    expect(mockRecipe).toEqual([
      {
        dateModified: '',
        idMeal: '1',
        strArea: 'British',
        strCategory: 'Dessert',
        strCreativeCommonsConfirmed: '',
        strDrinkAlternate: '',
        strImageSource: '',
        strIngredient1: 'digestive biscuits',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient2: 'butter',
        strIngredient20: '',
        strIngredient3: 'Bramley apples',
        strIngredient4: 'butter, softened',
        strIngredient5: 'caster sugar',
        strIngredient6: 'free-range eggs, beaten',
        strIngredient7: 'ground almonds',
        strIngredient8: 'almond extract',
        strIngredient9: 'flaked almonds',
        strInstructions: 'Preheat the oven to 200C/180C Fan/Gas 6...',
        strMeal: 'Apple Frangipan Tart',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
        strMeasure1: '175g/6oz',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure2: '75g/3oz',
        strMeasure20: '',
        strMeasure3: '200g/7oz',
        strMeasure4: '75g/3oz',
        strMeasure5: '75g/3oz',
        strMeasure6: '2',
        strMeasure7: '75g/3oz',
        strMeasure8: '1 tsp',
        strMeasure9: '50g/1¾oz',
        strSource: '',
        strTags: 'Tart,Baking,Fruity',
        strYoutube: ' https://www.youtube.com/watch?v=rp8Slv4INLk',
      },
      {
        dateModified: '',
        idMeal: '2',
        strArea: 'British',
        strCategory: 'Dessert',
        strCreativeCommonsConfirmed: '',
        strDrinkAlternate: '',
        strImageSource: '',
        strIngredient1: 'Plain Flour',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient2: 'Caster Sugar',
        strIngredient20: '',
        strIngredient3: 'Butter',
        strIngredient4: 'Braeburn Apples',
        strIngredient5: 'Butter',
        strIngredient6: 'Demerara Sugar',
        strIngredient7: 'Blackberrys',
        strIngredient8: 'Cinnamon',
        strIngredient9: 'Ice Cream',
        strInstructions: 'Heat oven to 190C/170C fan/gas 5...',
        strMeal: 'Apple & Blackberry Crumble',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
        strMeasure1: '120g',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure2: '60g',
        strMeasure20: '',
        strMeasure3: '60g',
        strMeasure4: '300g',
        strMeasure5: '30g',
        strMeasure6: '30g',
        strMeasure7: '120g',
        strMeasure8: '¼ teaspoon',
        strMeasure9: 'to serve',
        strSource: 'https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble',
        strTags: 'Pudding',
        strYoutube: 'https://www.youtube.com/watch?v=4vhcOwVBDO4',
      },
    ]);
  });

  test('Testa o useSearchBar', () => {
    const { result } = renderHook(() => useSearchBar());

    act(() => result.current.filterDispatch({ type: 'SET_SEARCH', key: 'search', value: 'eggs' }));

    expect(result.current.filter).toEqual(
      {
        radioSelected: 'i',
        search: 'eggs',
        searchActive: false,
      },
    );

    act(() => result.current.filterDispatch({ type: 'CLEAN_SEARCH' }));

    expect(result.current.filter).toEqual(
      {
        radioSelected: 'i',
        search: '',
        searchActive: true,
      },
    );

    act(() => result.current.filterDispatch({ type: '' }));

    expect(result.current.filter).toEqual(
      {
        radioSelected: 'i',
        search: '',
        searchActive: true,
      },
    );

    act(() => result.current.filterDispatch({ type: 'RESET' }));

    expect(result.current.filter).toEqual(
      {
        radioSelected: 'i',
        search: '',
        searchActive: false,
      },
    );
  });

  test('Testa o useCheckIngredients', () => {
    const { result } = renderHook(() => useCheckIngredients(2, '1', '/meals'));

    act(() => result.current.checkIngredientsDispatch({ type: '' }));

    expect(result.current.stateIngredients).toEqual(
      {
        strIngredient1: false,
        strIngredient2: false,
        strIngredient3: false,
        strIngredient4: false,
        strIngredient5: false,
        strIngredient6: false,
        strIngredient7: false,
        strIngredient8: false,
        strIngredient9: false,
        strIngredient10: false,
        strIngredient11: false,
        strIngredient12: false,
        strIngredient13: false,
        strIngredient14: false,
        strIngredient15: false,
        strIngredient16: false,
        strIngredient17: false,
        strIngredient18: false,
        strIngredient19: false,
        strIngredient20: false,
      },
    );
    result.current.stateIngredients = {
      strIngredient1: false,
      strIngredient2: false,
      strIngredient3: false,
      strIngredient4: false,
      strIngredient5: false,
      strIngredient6: false,
      strIngredient7: false,
      strIngredient8: false,
      strIngredient9: false,
      strIngredient10: false,
      strIngredient11: false,
      strIngredient12: false,
      strIngredient13: false,
      strIngredient14: false,
      strIngredient15: false,
      strIngredient16: false,
      strIngredient17: false,
      strIngredient18: false,
      strIngredient19: false,
      strIngredient20: false,
    };

    act(() => result.current.checkIngredientsDispatch({ type: 'CHANGE', name: 'strIngredient1', value: true }));

    expect(result.current.stateIngredients).toEqual(
      {
        strIngredient1: true,
        strIngredient2: false,
        strIngredient3: false,
        strIngredient4: false,
        strIngredient5: false,
        strIngredient6: false,
        strIngredient7: false,
        strIngredient8: false,
        strIngredient9: false,
        strIngredient10: false,
        strIngredient11: false,
        strIngredient12: false,
        strIngredient13: false,
        strIngredient14: false,
        strIngredient15: false,
        strIngredient16: false,
        strIngredient17: false,
        strIngredient18: false,
        strIngredient19: false,
        strIngredient20: false,
      },
    );
    act(() => result.current.checkIngredientsDispatch({ type: 'UPDATE' }));

    expect(result.current.initialState).toEqual({});
  });

  test('Testa o useSigUp', () => {
    const { result } = renderHook(() => useSignUp());

    act(() => result.current.signUpDispatch({ type: '' }));

    expect(result.current.user).toEqual({
      confirmPassword: '',
      email: '',
      password: '',
      profileImage: '',
      username: '',
    });
  });
});
