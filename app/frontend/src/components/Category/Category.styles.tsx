import styled from 'styled-components';
import fruits from '../../assets/Images/header_fruits.jpg';
import drinks from '../../assets/Images/bgImgDrink.png';

export const Section = styled.section`

  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    button {
      border-radius: 20px;
      color: #ffffff;
      font-size: larger;
      font-weight: bold;
      height: 3rem;
      margin: 0 0.5rem;
      position: absolute;
      transition: 0.3s ease;
      width: 10rem;
      z-index: 2;

      &:hover {
        background-color: #FF5C16;
        color: #fff;
        border: none;
      }
    }
  }

`;

export const Div = styled.div<{ path: string }>`
    align-items: center;
    background-image: url(${(props) => (props.path === '/meals' ? fruits : drinks)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    filter: brightness(70%);
    font-weight: bold;
    justify-content: center;
    height: 3rem;
    margin: 0 0.5rem;
    position: relative;
    width: 10rem;
    z-index: 1;
`;
