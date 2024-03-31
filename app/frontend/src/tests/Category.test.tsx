import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import Category from '../components/Category';

describe('Testes referentes ao Category', () => {
  test('Testa se nenhuma categoria for recebida, aparece o componente Loading', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => undefined,
    } as Response;

    const mockSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(
      <Provider>
        <Category />
      </Provider>,
      { route: '/meals' },
    );
    const loading = await screen.findByLabelText('desktop-loading');

    expect(mockSpy).toHaveBeenCalled();
    expect(loading).toBeInTheDocument();
  });
});
