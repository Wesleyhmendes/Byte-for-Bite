import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Login from '../pages/Login';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';

describe('Testa o componente Login', () => {
  const emailTestId = 'email-input';
  const passwordTestId = 'password-input';
  const submitBtnTestId = 'login-submit-btn';

  test('Testa se os inputs de email e senha e o botão entrar estão presentes', () => {
    renderWithRouter(
      <UserInfoProvider>
        <Login />
      </UserInfoProvider>,
    );

    expect(screen.getByTestId(emailTestId)).toBeInTheDocument();
    expect(screen.getByTestId(passwordTestId)).toBeInTheDocument();
    expect(screen.getByTestId(submitBtnTestId)).toBeInTheDocument();
  });

  test('Testa se ao preencher os campos de input corretamente e clicar no botão Entrar a aplicação é redirecionada para a rota "/meals"', async () => {
    const mockToken = 'success';
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => ({ token: mockToken }),
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Login />
      </UserInfoProvider>,
    );

    const emailTest = 'user@user.com';
    const passwordTest = '123456';

    expect(window.location.pathname).toBe('/');

    const inputEmail = screen.getByTestId(emailTestId);
    const inputPassword = screen.getByTestId(passwordTestId);
    const buttonSubmit = screen.getByTestId(submitBtnTestId);

    await user.type(inputEmail, emailTest);
    await user.type(inputPassword, passwordTest);
    await user.click(buttonSubmit);

    waitFor(() => {
      expect(screen.getByText('Welcome!')).toBeInTheDocument();
    });

    waitFor(() => {
      expect(window.location.pathname).toBe('/meals');
    });
  });

  test('Testa se aparece uma mensagem de erro caso as informações de login sejam inválidas', async () => {
    const MOCK_ERROR_RESPONSE = {
      ok: false,
      status: 400,
      json: async () => ({ message: 'Invalid email or password' }),
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_ERROR_RESPONSE);

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Login />
      </UserInfoProvider>,
    );

    const emailTest = 'teste@teste.com';
    const passwordTest = '123456';

    const inputEmail = screen.getByTestId(emailTestId);
    const inputPassword = screen.getByTestId(passwordTestId);
    const buttonSubmit = screen.getByTestId(submitBtnTestId);

    await user.type(inputEmail, emailTest);
    await user.type(inputPassword, passwordTest);
    await user.click(buttonSubmit);

    waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
    });

    const okButton = await screen.findByRole('button');

    expect(okButton).toBeInTheDocument();

    await user.click(okButton);

    waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });
});
