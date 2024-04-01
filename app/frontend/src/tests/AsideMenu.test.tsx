import { GoogleOAuthProvider } from '@react-oauth/google';
import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import Provider from '../context/Provider/Provider';
import App from '../App';
import mockMealRecipes from './mocks/mockMealRecipes';

describe('Testes do Aside.Menu', () => {
  beforeEach(() => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockMealRecipes,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
  });
  test('Testa se o menu é renderizado corretamente', async () => {
    const { user } = renderWithRouter(
      <GoogleOAuthProvider clientId="837825883055-16f47j4qisf0vcbpf9on5p44mclu8dlk.apps.googleusercontent.com">
        <UserInfoProvider>
          <Provider>
            <App />
          </Provider>
        </UserInfoProvider>
      </GoogleOAuthProvider>,
      { route: '/meals' },
    );

    const menuBtn = screen.getByLabelText('asideMenu-btn');

    expect(menuBtn).toBeInTheDocument();

    await user.hover(menuBtn);

    const logoImg = await screen.findByLabelText('logoImg');

    expect(logoImg).toBeInTheDocument();
  });
});
