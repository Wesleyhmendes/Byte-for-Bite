import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar';

function Header() {
  const [searchVisible, setSearchVisible] = useState(false);

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

  return (
    <header>
      <div>
        <h1 data-testid="page-title">{ pageTitle }</h1>
        <Link to="/profile">
          <img
            src="src/images/profileIcon.svg"
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
