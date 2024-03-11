/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import Context from '../../context/Context';

function Header() {
  const { user, profile } = useContext(UserInfoContext);
  const { route } = useContext(Context);
  const { data, handleFetch } = profile; 

  const profileIMG = data ? data.profileImage : undefined;

  const pageTitle = route === '/meals' ? 'Meals' : 'Drinks'; 

  useEffect(() => { handleFetch(); }, [user]);
  return (
    <HeaderStyle>
      <HeaderMainDiv className={ pageTitle }>
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
