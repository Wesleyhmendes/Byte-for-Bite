import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const buttonDrinkId = 'filter-by-drink-btn';
const buttonAllId = 'filter-by-all-btn';
const buttonMealId = 'filter-by-meal-btn';
const routeFavoriteRecipes = '/favorite-recipes';
const recipeMealName = 'Spicy Arrabiata Penne';

const recipeMeal = {
  alcoholicOrNot: '',
  category: 'Vegetarian',
  id: '52771',
  image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  name: recipeMealName,
  nationality: 'Italian',
  type: 'meal',
};

const recipeDrink = {
  alcoholicOrNot: 'Alcoholic',
  category: 'Cocktail',
  id: '178319',
  image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  name: 'Aquamarine',
  nationality: '',
  type: 'drink',
};

describe('Testa o componente FavoriteRecipes', () => {
  test('Testa se os botões estão presentes na página', async () => {
    renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    screen.getByTestId(buttonAllId);
    screen.getByTestId(buttonDrinkId);
    screen.getByTestId(buttonMealId);
  });

  localStorage.setItem('favoriteRecipes', JSON.stringify([recipeMeal, recipeDrink]));

  test('Testa se página renderiza 2 receitas', async () => {
    renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    const recipes = screen.getAllByTestId(/horizontal-image/i);
    expect(recipes).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');
  });

  test('Testa se ao clicar no botão "Meals" apenas uma receita é exibida na tela', async () => {
    const { user } = renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');

    const buttonMeals = screen.getByTestId(buttonMealId);
    await user.click(buttonMeals);

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(1);
    screen.getByText(recipeMealName);
  });

  test('Testa se ao clicar no botão "Drinks" apenas uma receita é exibida na tela', async () => {
    const { user } = renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');

    const buttonDrinks = screen.getByTestId(buttonDrinkId);
    await user.click(buttonDrinks);

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(1);
    screen.getByText('Aquamarine');
  });

  test('Testa se ao clicar no botão "All" o filtro de receitas é removido', async () => {
    const { user } = renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');

    const buttonDrinks = screen.getByTestId(buttonDrinkId);
    await user.click(buttonDrinks);

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(1);
    screen.getByText('Aquamarine');

    const buttonAll = screen.getByTestId(buttonAllId);
    await user.click(buttonAll);

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');
  });

  test('Testa se ao clicar no botão de compartilhar da receita o link é copiado corretamente', async () => {
    const { user } = renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');

    const buttonShareSpicy = screen.getByTestId('0-horizontal-share-btn');
    await user.click(buttonShareSpicy);

    expect(await navigator.clipboard.readText()).toBe('http://localhost:3000/meals/52771');
  });

  test('Testa se ao clicar no botão de favoritar o item é removido da tela', async () => {
    const { user } = renderWithRouter(<FavoriteRecipes />, { route: routeFavoriteRecipes });

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(2);

    screen.getByText(recipeMealName);
    screen.getByText('Aquamarine');

    const buttonFavoriteSpicy = screen.getByTestId('0-horizontal-favorite-btn');
    await user.click(buttonFavoriteSpicy);

    expect(screen.getAllByTestId(/horizontal-image/i)).toHaveLength(1);
  });
});
