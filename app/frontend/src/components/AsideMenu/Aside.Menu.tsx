import { useState } from 'react';
import { Nav, Ul, StyledBurger } from './Aside.styles';
import logo from '../../assets/Images/BfB_Logo.png';

function AsideMenu() {
  const [open, setOpen] = useState(false);

  const handleMenuEnter = () => {
    setOpen(true);
  };

  const handleMenuLeave = () => {
    setOpen(false);
  };
  return (
    <Nav>
      <StyledBurger open={ open } onMouseEnter={ handleMenuEnter }>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={ open } onMouseLeave={ handleMenuLeave }>
        <img src={ logo } alt="log bite for byte" />
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
