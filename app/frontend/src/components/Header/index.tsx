import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import useFetch from '../../hooks/useFetch';
import UserInfoContext from '../../context/UserInfo/UserInfoContext';


function Header() {
  const [searchVisible, setSearchVisible] = useState(false);  
  const { userInfo } = useContext(UserInfoContext);  

  const email = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : undefined;  

  const profileURL = `http://localhost:3001/profile?email=${email}`;
  const { data, handleFetch } = useFetch(profileURL, { method: 'GET', body: { email } });
 
  const profileIMG = data ? data.profileImage : undefined;  

  const pathName = useLocation().pathname;
  const pageTitle = useLocation().pathname
    .split('/')[1]
    .replace(/(^\w{1})|(-\w{1})/g, (match) => match.toUpperCase())
    .replace(/-/g, ' ');

  const showSearchIcon = () => {
    return (pathName === '/meals' || pathName === '/drinks');
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };   
  
  useEffect(() => { handleFetch() }, [userInfo]); 

  return (
    <header>
      <div>
        <h1 data-testid="page-title">{ pageTitle }</h1>
        <Link to="/profile">
          <img
            style={ {width: '180px', height: '150px'} }
            src={ profileIMG ? profileIMG : profileIcon }
            alt="Profile"
            data-testid="profile-top-btn"
          />
        </Link>
      </div>
      { showSearchIcon() && (
        <div>
          <button onClick={ toggleSearch }>
            <img
              src="src/images/searchIcon.svg"
              alt="Search"
              data-testid="search-top-btn"
            />
          </button>
        </div>
      )}
      { searchVisible && (
        <div>
          <SearchBar />
        </div>
      ) }
    </header>
  );
}

export default Header;
