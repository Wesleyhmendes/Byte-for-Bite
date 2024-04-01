import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { renderWithRouter } from './utils/renderWithRouter';
import Profile from '../pages/Profile';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import Provider from '../context/Provider/Provider';
import mockUser from './mocks/mockUser';
import App from '../App';
import getUsername from '../utils/getUsername';

describe('Testa o componente Profile', () => {
  beforeEach(() => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockUser,
    } as Response;
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  const doneBtnTestId = 'profile-done-btn';
  const favoriteBtnTestId = 'profile-favorite-btn';
  const logoutBtnTestId = 'profile-logout-btn';

  test('Testa se a página Profile é renderizada', async () => {
    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Profile />
        </Provider>
      </UserInfoProvider>,
      { route: '/profile' },
    );

    const doneBtn = await screen.findByTestId(doneBtnTestId);
    const favoriteBtn = await screen.findByTestId(favoriteBtnTestId);
    const logoutBtn = await screen.findByTestId(logoutBtnTestId);
    const user = await screen.findByText('user@user.com');

    expect(user).toBeInTheDocument();
    expect(doneBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão de Done Recipes, é redirecionado para a rota /done-recipes', async () => {
    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <App />
        </Provider>
      </UserInfoProvider>,
      { route: '/profile' },
    );

    const doneBtn = await screen.findByTestId(doneBtnTestId);

    expect(doneBtn).toBeInTheDocument();

    await user.click(doneBtn);

    const path = window.location.pathname;

    expect(path).toBe('/done-recipes');
  });

  test('Testa se ao clicar no botão de Favorite Recipes, é redirecionado para a rota /favorite-recipes', async () => {
    const { user } = renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <App />
        </Provider>
      </UserInfoProvider>,
      { route: '/profile' },
    );

    const favBtn = await screen.findByTestId(favoriteBtnTestId);

    // expect(screen.getByText('teste@teste.com')).toBeInTheDocument();
    expect(favBtn).toBeInTheDocument();

    await user.click(favBtn);

    const path = window.location.pathname;

    expect(path).toBe('/favorite-recipes');
  });

  test('Testa se ao clicar no botão de Logout, é redirecionado para a rota "/"', async () => {
    const { user } = renderWithRouter(
      <GoogleOAuthProvider clientId="837825883055-16f47j4qisf0vcbpf9on5p44mclu8dlk.apps.googleusercontent.com">
        <UserInfoProvider>
          <Provider>
            <App />
          </Provider>
        </UserInfoProvider>
      </GoogleOAuthProvider>,
      { route: '/profile' },
    );

    const logoutBtn = await screen.findByTestId(logoutBtnTestId);

    expect(logoutBtn).toBeInTheDocument();

    await user.click(logoutBtn);

    const path = window.location.pathname;

    expect(path).toBe('/');
  });

  test('Testa a função getUsername', async () => {
    const user = {
      data: mockUser,
      isLoading: false,
      error: undefined,
      handleFetch: vi.fn(),
      dispatch: vi.fn(),
    };
    const username = getUsername(user);
    expect(username).toEqual('User');
  });

  test('Testa se é possivel trocar a imagem de perfil', async () => {
    const { user } = renderWithRouter(
      <GoogleOAuthProvider clientId="837825883055-16f47j4qisf0vcbpf9on5p44mclu8dlk.apps.googleusercontent.com">
        <UserInfoProvider>
          <Provider>
            <App />
          </Provider>
        </UserInfoProvider>
      </GoogleOAuthProvider>,
      { route: '/profile' },
    );

    const changeImgBtn = await screen.findByLabelText('changeImg-btn');

    expect(changeImgBtn).toBeInTheDocument();

    await user.click(changeImgBtn);

    const changeImgInput = await screen.findByLabelText('changeImg-input');
    const updateImgBtn = await screen.findByLabelText('updateImg-btn');

    await user.type(changeImgInput, 'imageUrl');

    expect(changeImgInput).toBeInTheDocument();
    expect(updateImgBtn).toBeInTheDocument();

    await user.click(updateImgBtn);

    expect(updateImgBtn).not.toBeInTheDocument();
  });

  test('Testa se clicar no botão update sem uma URL inserida aparece um alerta', async () => {
    const { user } = renderWithRouter(
      <GoogleOAuthProvider clientId="837825883055-16f47j4qisf0vcbpf9on5p44mclu8dlk.apps.googleusercontent.com">
        <UserInfoProvider>
          <Provider>
            <App />
          </Provider>
        </UserInfoProvider>
      </GoogleOAuthProvider>,
      { route: '/profile' },
    );

    const changeImgBtn = await screen.findByLabelText('changeImg-btn');

    await user.click(changeImgBtn);

    const updateImgBtn = await screen.findByLabelText('updateImg-btn');

    expect(updateImgBtn).toBeInTheDocument();

    await user.click(updateImgBtn);

    const alert = await screen.findByLabelText('error-alert');

    expect(updateImgBtn).toBeInTheDocument();
    expect(alert).toBeInTheDocument();
  });
});
