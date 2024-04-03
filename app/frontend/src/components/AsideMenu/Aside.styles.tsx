import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: fit-content;
  padding-left: 0.7rem;
  width: fit-content;
  z-index: 21;

  div {
    button {
      background: transparent;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media(min-width: 1280px) {
    div {
      display: none;
    }
  }
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  align-self: center;
  height: 2rem;
  left: 20px;
  top: 15px;
  width: 2rem;
  z-index: 20;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  &:hover {
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Ul = styled.ul<{ open: boolean }>`
  background-color: #ffffff;
  border-radius: 0 20px 20px 0;
  box-shadow: 1px 2px 2px 0px rgba(189,189,189,1);
  display: flex;
  flex-flow: column nowrap;
  height: fit-content;
  left: 0;
  list-style: none;
  padding-bottom: 2.5rem;
  padding-top: 3.5rem;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  transition: transform 0.3s ease-in-out;
  width: 300px;

  img {
    padding-left: 2rem;
    width: 130px;
  }

  .pages {
    color: #777777;
    font-size: larger;
    padding: 2rem 1rem 0 2rem;
  }

  button {
    align-items: center;
    color: #777777;
    display: flex;
    font-size: larger;
    gap: 0.5rem;
    padding: 15rem 1rem 1rem 0rem;
    transition: ease 0.3s;

    img {
      width: 55px;
    }

    &:hover {
      cursor: pointer;
      color: #FF4B00;
    }
  }

  li {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding: 2rem 1rem 0 0rem;
    font-weight: bold;
    transition: ease 0.3s;

    img {
      width: 55px;
    }

    &:hover {
      cursor: pointer;
      color: #FF4B00;
    }
  }
`;
