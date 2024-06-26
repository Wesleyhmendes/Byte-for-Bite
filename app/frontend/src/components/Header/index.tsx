/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';

import {
  HeaderMainDiv,
  TopIconsDiv,
  Title,
  ProfileImg,
} from './Header.styles';
import AsideMenu from '../AsideMenu/Aside.Menu';
import Context from '../../context/Context';
import { getHeaderTitle, getProfileImage } from '../../utils/headerUtils';

function Header() {
  const { profile } = useContext(UserInfoContext);
  const { route } = useContext(Context);
  const { data } = profile;

  const profileIMG = getProfileImage(data, profileIcon);

  const pageTitle = getHeaderTitle(route);

  return (
    <header>
      <HeaderMainDiv className={ pageTitle }>
        <TopIconsDiv>
          <AsideMenu />
          <Title
            aria-label="header-title"
            src={ pageTitle }
          />
          <Link to="/profile">
            <ProfileImg
              src={ profileIMG }
              alt="Profile"
              data-testid="profile-top-btn"
            />
          </Link>
        </TopIconsDiv>
        <div>
          <SearchBar />
        </div>
      </HeaderMainDiv>
    </header>
  );
}

export default Header;
