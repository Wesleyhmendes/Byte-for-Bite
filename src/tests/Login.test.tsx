import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';
import Login from '../pages/Login';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';

describe('Testa o componente login', () => {
  test('Testa se os inputs de email e senha e o botão entrar estão presentes', () => {
    renderWithRouter(<Login />);

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('login-submit-btn')).toBeInTheDocument();
  });

  test('Testa se ao preencher os campos de input corretamente e clicar no botão Entrar a aplicação é redirecionada para a rota "/meals"', async () => {
    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Login />
      </UserInfoProvider>,
    );

    const emailTest = 'test@test.com';
    const passwordTest = '1234567';

    expect(window.location.pathname).toBe('/');

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonSubmit = screen.getByTestId('login-submit-btn');

    await user.type(inputEmail, emailTest);
    await user.type(inputPassword, passwordTest);
    await user.click(buttonSubmit);

    expect(window.location.pathname).toBe('/meals');
  });
});
