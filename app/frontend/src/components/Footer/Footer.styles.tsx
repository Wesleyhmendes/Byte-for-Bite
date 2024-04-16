import styled, { css } from 'styled-components';
import theme from '../../theme';

export const FooterStyled = styled.footer`
  bottom: 0;
  display: flex;
  position: fixed;
  width: 100%;

  div {
    background-color: ${theme.colors.background.white};
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
      padding-bottom: 0.7rem;
    }
  }
`;

export const IconDrinks = styled.img<{ route: string }>`
  border-bottom: ${(props) =>
  props.route.endsWith("/drinks") ? `3px solid ${theme.colors.background.first}` : "1px solid transparent"};
`;

export const IconMeal = styled.img<{ route: string }>`
  border-bottom: ${(props) =>
  props.route.endsWith("/meals") ? `3px solid ${theme.colors.background.first}` : "1px solid transparent"};
`;


