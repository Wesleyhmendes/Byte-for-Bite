import styled, { css } from 'styled-components';

export const FooterStyled = styled.footer`
  bottom: 0;
  display: flex;
  position: fixed;
  width: 100%;

  div {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -1px 3px 0px rgba(189,189,189,1);
    display: flex;
    justify-content: space-around;
    padding-top: 0.7rem;
    padding-bottom: 1rem;
    width: 100%;

    img {
      width: 45px;
      height: 40px;
      padding-bottom: 0.5rem;
    }
  }

  @media(min-width: 768px) {
    justify-content: center;
    div {
      width: 70%;
      border-radius: 20px;
      margin-bottom: 1.5rem;
    }
  }
`;

export const IconMeal = styled.img`
  ${(props) => props.className === '/meals' && css`
    border-bottom: 3px solid #FF4B00;
  `}

`;

export const IconDrinks = styled.img`
  ${(props) => props.className === '/drinks' && css`
    border-bottom: 3px solid #FF4B00;
  `}
`;
