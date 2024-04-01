import { screen } from '@testing-library/react';
import Layout from '../components/Layout';
import Provider from '../context/Provider/Provider';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import { renderWithRouter } from './utils/renderWithRouter';

describe('Testes do Layout', () => {
  test('Testa se o Layout é renderizado corretamente', () => {
    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Layout />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals' },
    );

    const headerTitle = screen.getByLabelText('header-title');
    const profileBtn = screen.getByTestId('profile-top-btn');

    expect(headerTitle).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
  });
});
