import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import CategoryButton from '../components/CategoryButton/CategoryButton';

describe('Testes referentes ao CategoryButton', () => {
  test('Testa se os botões de categoria são renderizados', () => {
    const getCategorySpy = vi.fn();
    renderWithRouter(
      <Provider>
        <CategoryButton strCategory="all" getSelectedCategory={ getCategorySpy } />
      </Provider>,
      { route: '/meals' },
    );

    const categoryBtn = screen.getByTestId('all-category-filter');

    expect(categoryBtn).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão, a função getSelectedCategory é chamada', async () => {
    const getCategorySpy = vi.fn();
    const { user } = renderWithRouter(
      <Provider>
        <CategoryButton strCategory="beef" getSelectedCategory={ getCategorySpy } />
      </Provider>,
      { route: '/meals' },
    );

    const categoryBtn = screen.getByTestId('beef-category-filter');

    await user.click(categoryBtn);

    expect(getCategorySpy).toHaveBeenCalled();

    await user.click(categoryBtn);

    expect(getCategorySpy).toHaveBeenCalledTimes(2);
  });

  test('Testa se ao clicar no botão, com a categoria "All" a função getSelectedCategory é chamada', async () => {
    const getCategorySpy = vi.fn();
    const { user } = renderWithRouter(
      <Provider>
        <CategoryButton strCategory="All" getSelectedCategory={ getCategorySpy } />
      </Provider>,
      { route: '/meals' },
    );

    const categoryBtn = screen.getByTestId('All-category-filter');

    await user.click(categoryBtn);

    expect(getCategorySpy).toHaveBeenCalled();
  });
});
