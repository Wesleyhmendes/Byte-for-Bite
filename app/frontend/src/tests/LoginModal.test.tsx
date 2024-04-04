import { screen } from '@testing-library/dom';
import { vi } from 'vitest';

import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import Modal from '../components/Modals/LoginModal';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';

describe('Testes referentes ao LoginModal', () => {
  test('Testa se o modal funciona corretamente', async () => {
    const mockToken = 'teste';
    const setIsModalOpenSpy = vi.fn();
    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Modal token={ mockToken } setIsModalOpen={ setIsModalOpenSpy } message="teste" />
        </Provider>
      </UserInfoProvider>,
      { route: '/' },
    );

    const modalBtn = await screen.findByLabelText('loginModal-btn');
    await user.click(modalBtn);

    expect(setIsModalOpenSpy).toHaveBeenCalled();
  });
});
