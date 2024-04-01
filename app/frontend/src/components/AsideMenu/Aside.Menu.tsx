import { useState } from 'react';
import { Nav, Ul, StyledBurger } from './Aside.styles';
import logo from '../../assets/Images/BfB_Logo.png';

function AsideMenu() {
  const [open, setOpen] = useState(false);

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
        <li>All</li>
        <li>Beef</li>
        <li>Chicken</li>
        <li>Dessert</li>
        <li>Lamb</li>
        <li>Miscellaneous</li>
      </Ul>
    </Nav>
  );
}

export default AsideMenu;
