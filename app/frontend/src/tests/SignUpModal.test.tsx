import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import Modal from '../components/Modals/SignUpModal';

describe('Testes referentes ao SignUpModal', () => {
  test('Testa se o modal funciona corretamente', async () => {
    const mockToken = { token: 'teste' };
    const setIsModalOpenSpy = vi.fn();
    const { user } = renderWithRouter(
      <Provider>
        <Modal data={ mockToken } setIsModalOpen={ setIsModalOpenSpy } />
      </Provider>,
      { route: '/meals' },
    );

    const modalBtn = screen.getByLabelText('signUp-modal-btn');

    expect(modalBtn).toBeInTheDocument();

    await user.click(modalBtn);

    expect(setIsModalOpenSpy).toHaveBeenCalled();
  });
});
