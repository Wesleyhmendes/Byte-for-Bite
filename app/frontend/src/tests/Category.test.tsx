import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import Category from '../components/Category';

describe('Testes referentes ao Category', () => {
  test('Testa se nenhuma categoria for recebida, aparece o componente Loading', async () => {
    renderWithRouter(
      <Provider>
        <Category />
      </Provider>,
      { route: '/meals' },
    );
  });
});
