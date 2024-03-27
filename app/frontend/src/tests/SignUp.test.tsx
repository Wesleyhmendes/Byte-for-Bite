import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import SignUp from '../pages/SignUp';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';

describe('Testa o componente SignUp', () => {
  test('Testa se o formulário para cadastro de conta está na página', () => {
    renderWithRouter(
      <UserInfoProvider>
        <SignUp />
      </UserInfoProvider>,
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByPlaceholderText('At least 6 characters');
    const confirmPasswordInput = screen.getByLabelText('Confirm your password');
    const submitBtn = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });

  test('Testa se o formulário for preenchido corretamente, leva para a página "/meals"', async () => {
    const mockToken = 'success';
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => ({ token: mockToken }),
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <UserInfoProvider>
        <SignUp />
      </UserInfoProvider>,
    );

    const email = 'teste@teste.com';
    const username = 'teste';
    const password = '123456';
    const confirmPass = '123456';

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByPlaceholderText('At least 6 characters');
    const confirmPasswordInput = screen.getByLabelText('Confirm your password');
    const submitBtn = screen.getByRole('button');

    await user.type(emailInput, email);
    await user.type(usernameInput, username);
    await user.type(passwordInput, password);
    await user.type(confirmPasswordInput, confirmPass);

    expect(submitBtn).toBeEnabled();

    await user.click(submitBtn);

    waitFor(() => {
      expect(window.location.pathname).toBe('/meals');
    });
  });
});
