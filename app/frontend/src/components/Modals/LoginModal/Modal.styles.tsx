/* eslint-disable max-lines */
import styled from 'styled-components';
import theme from '../../../theme';

export const ModalDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H3 = styled.h3`
  color: ${theme.colors.text.title};
  font-size: larger;
  font-weight: 600;
  text-align: center;
  line-height: 0px;
  margin-bottom: 35px;
`;

export const Button = styled.button`
  @media (min-width: 320px) {
    background-color: ${theme.colors.button.activeBtn};
    border-radius: 7px;
    color: ${theme.colors.text.whiteText};
    font-size: 20px;
    font-weight: 600; 
    height: 2.5rem;
    margin: 1rem 0 1rem;
    transition: 0.3s ease;
    width: 80%;

    &:hover {
      background-color: ${theme.colors.button.hoverBtn};
      cursor: pointer;
      color: ${theme.colors.text.text};
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }

  @media (min-width: 1444px) {
    width: 45%;
  }
`;
