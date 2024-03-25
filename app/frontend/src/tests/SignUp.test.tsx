import { screen, waitFor } from '@testing-library/react';
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

    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  test('Testa se o formulário for preenchido corretamente, leva para a página "/meals"', async () => {
    renderWithRouter(
      <UserInfoProvider>
        <SignUp />
      </UserInfoProvider>,
    );

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const usernameInput = screen.getByRole('textbox', { name: /username/i });
    const passwordInput = screen.getByPlaceholderText('At least 6 characters');
    const confirmPasswordInput = screen.getByLabelText('Confirm your password');
  });
});
