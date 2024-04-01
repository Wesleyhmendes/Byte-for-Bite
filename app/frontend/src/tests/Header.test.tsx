import { screen, waitFor } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Header from '../components/Header';
import UserInfoProvider from '../context/UserInfo/UserInfoProvider';
import Provider from '../context/Provider/Provider';
import { getHeaderTitle, getProfileImage } from '../utils/headerUtils';
import mockUser from './mocks/mockUser';
import profileIcon from '../assets/Icons/profile-icon.svg';

const profileId = 'profile-top-btn';
const searchInputId = 'search-input';

describe('Testa o componente Header', () => {
  test('Testa se o Header é renderizado na rota "/meals"', async () => {
    renderWithRouter(
      <UserInfoProvider>
        <Provider>
          <Header />
        </Provider>
      </UserInfoProvider>,
      { route: '/meals' },
    );

    const profileBtn = await screen.findByTestId(profileId);
    const headerTitle = await screen.findByLabelText('header-title');
    const searchInput = await screen.findByTestId(searchInputId);

    expect(searchInput).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
  });

  test('Testa se as funções utilitárias do Header funcionam corretamente', async () => {
    const headerTitle = getHeaderTitle('/meals');

    expect(headerTitle).toBe('/src/assets/Images/Meals-title.png');

    const headerTitle2 = getHeaderTitle('/drinks');

    expect(headerTitle2).toBe('/src/assets/Images/Drinks-title.png');

    const profileImage = getProfileImage(mockUser, profileIcon);

    expect(profileImage).toBe(profileIcon);

    const validImage = { ...mockUser, profileImage: 'validUrl' };

    const validProfileImage = getProfileImage(validImage, profileIcon);

    expect(validProfileImage).toBe('validUrl');
  });
});
