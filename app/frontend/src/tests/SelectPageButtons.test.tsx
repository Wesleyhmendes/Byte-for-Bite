import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';

import SelectPageButtons from '../pages/Recipes/SelectPageButtons';

describe('Testes referentes ao SelectPageButtons', () => {
  const pageNumLabel = 'pageNum-btn';
  const firstPageLabel = 'firstPage-btn';
  const lastPageLabel = 'lastPage-btn';

  test('Testa se todos os botões são renderizados', () => {
    const mockPagesArr = [1, 2, 3];
    const handlePageNumSpy = vi.fn();
    renderWithRouter(
      <Provider>
        <SelectPageButtons pages={ mockPagesArr } handlePageNum={ handlePageNumSpy } currentPage={ 1 } />
      </Provider>,
      { route: '/meals' },

    );
    const pagenumBtns = screen.getAllByLabelText(pageNumLabel);

    expect(pagenumBtns.length).toBe(3);
  });

  test('Testa se a lógica do botões de paginas está funcionando corretamente', async () => {
    const mockPagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const handlePageNumSpy = vi.fn();
    const { user } = renderWithRouter(
      <Provider>
        <SelectPageButtons pages={ mockPagesArr } handlePageNum={ handlePageNumSpy } currentPage={ 5 } />
      </Provider>,
      { route: '/meals' },

    );
    const firstPageBtn = screen.getByLabelText(firstPageLabel);
    const pagenumBtns = screen.getAllByLabelText(pageNumLabel);
    const lastPageBtn = screen.getByLabelText(lastPageLabel);

    expect(pagenumBtns.length).toBe(5);
    expect(firstPageBtn).toBeInTheDocument();
    expect(lastPageBtn).toBeInTheDocument();

    await user.click(pagenumBtns[3]);

    expect(handlePageNumSpy).toHaveBeenCalledTimes(1);

    await user.click(pagenumBtns[2]);

    expect(handlePageNumSpy).toHaveBeenCalledTimes(2);
  });

  test('Testa quando a current page for um numero proximo do final de páginas, o lastpageBtn não é renderizado', async () => {
    const mockPagesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const handlePageNumSpy = vi.fn();
    renderWithRouter(
      <Provider>
        <SelectPageButtons pages={ mockPagesArr } handlePageNum={ handlePageNumSpy } currentPage={ 9 } />
      </Provider>,
      { route: '/meals' },

    );
    const firstPageBtn = screen.getByLabelText(firstPageLabel);
    const pagenumBtns = screen.getAllByLabelText(pageNumLabel);

    expect(pagenumBtns.length).toBe(5);
    expect(firstPageBtn).toBeInTheDocument();
  });
});
