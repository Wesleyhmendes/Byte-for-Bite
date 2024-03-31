import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Provider from '../context/Provider/Provider';
import Modal from '../components/Modals/SignUpModal';
import { getMessage, getReturnMessage, getRoute, getToken } from '../utils/signUpModalUtils';

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

  test('Testa se as funções utilitárias estão funcionando', async () => {
    const mockToken = { token: 'mockToken' };

    const token = getToken(mockToken);

    expect(token).toEqual('mockToken');

    const mockMessage = { message: 'mockMessage' };

    const message = getMessage(mockMessage);

    expect(message).toEqual('mockMessage');

    const successMessage = getReturnMessage(token, message);

    expect(successMessage).toEqual('Registration complete!');

    const notFound = getToken(mockMessage);

    const rejectedMessage = getReturnMessage(notFound, message);

    expect(rejectedMessage).toEqual('mockMessage');

    const successRoute = getRoute(token);
    const failureRoute = getRoute(notFound);

    expect(successRoute).toEqual('/meals');
    expect(failureRoute).toEqual('/signup');
  });
});
