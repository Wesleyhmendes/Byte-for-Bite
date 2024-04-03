import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Nav, Ul, StyledBurger } from './Aside.styles';
import logo from '../../assets/Images/BfB_Logo.png';
import logout from '../../assets/Icons/logout_icon.png';
import verifiedIcon from '../../assets/Icons/AsideMenuDesktop/done_icon.png';
import favoriteIcon from '../../assets/Icons/AsideMenuDesktop/favorite_icon.png';

function AsideMenu() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Nav>
      <StyledBurger
        aria-label="asideMenu-btn"
        open={ open }
        onMouseEnter={ handleMenu }
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={ open } onMouseLeave={ handleMenu }>
        <img aria-label="logoImg" src={ logo } alt="logo bite for byte" />
        <h2 className="pages">Pages</h2>
        <Link to="/done-recipes">
          <li>
            <img src={ verifiedIcon } alt="done recipes" />
            Done Recipes
          </li>
        </Link>
        <Link to="/favorite-recipes">
          <li>
            <img src={ favoriteIcon } alt="favorite recipes" />
            Favorite Recipes
          </li>
        </Link>
        <button onClick={ () => navigate('/') } className="logout">
          <img src={ logout } alt="logout" />
          Logout
        </button>
      </Ul>
    </Nav>
  );
}

export default AsideMenu;
