/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import {
  HeaderStyle,
  HeaderMainDiv,
  TopIconsDiv,
  H1,
  ProfileImg,
} from './Header.styles';
import AsideMenu from '../AsideMenu/Aside.Menu';

function Header() {
  const { user, profile } = useContext(UserInfoContext);
  const { data, handleFetch } = profile;
  const [pageName, setPageName] = useState('Meals');

  const profileIMG = data ? data.profileImage : undefined;

  const pageTitle = useLocation().pathname
    .split('/')[1]
    .replace(/(^\w{1})|(-\w{1})/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ');

  useEffect(() => { setPageName(pageTitle); }, [pageTitle]);

  useEffect(() => { handleFetch(); }, [user]);
  return (
    <HeaderStyle>
      <HeaderMainDiv className={ pageName }>
        <TopIconsDiv>
          <AsideMenu />
          <H1 data-testid="page-title">{ pageTitle }</H1>
          <Link to="/profile">
            <ProfileImg
              src={ profileIMG || profileIcon }
              alt="Profile"
              data-testid="profile-top-btn"
            />
          </Link>
        </TopIconsDiv>
        <div>
          <SearchBar />
        </div>
      </HeaderMainDiv>
    </HeaderStyle>
  );
}

export default Header;
