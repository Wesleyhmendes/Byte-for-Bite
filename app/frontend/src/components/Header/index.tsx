/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';
import mealTitle from '../../assets/Images/Meals-title.png';
import drinkTitle from '../../assets/Images/Drinks-title.png';
import {
  HeaderStyle,
  HeaderMainDiv,
  TopIconsDiv,
  Title,
  ProfileImg,
} from './Header.styles';
import AsideMenu from '../AsideMenu/Aside.Menu';
import Context from '../../context/Context';

function Header() {
  const { profile } = useContext(UserInfoContext);
  const { route } = useContext(Context);
  const { data, handleFetch } = profile;
  

  const profileIMG = data ? data.profileImage : undefined;

  const pageTitle = route === '/meals' ? 'Meals' : 'Drinks';

  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <HeaderStyle>
      <HeaderMainDiv className={ pageTitle }>
        <TopIconsDiv>
          <AsideMenu />
          <Title src={ route === '/meals' ? mealTitle : drinkTitle } />
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
