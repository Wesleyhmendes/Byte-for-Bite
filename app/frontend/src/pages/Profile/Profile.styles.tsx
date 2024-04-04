import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.main`
  align-items: center;
  background-color: ${theme.colors.background.first};
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: -7rem;
  
`;

export const UserInfoContainer = styled.section`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.background.first};
    color: ${theme.colors.text.whiteText};
    margin-bottom: 1rem;

    h2 {
      font-size: 2rem;
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }

    button {
      margin: 2rem;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 12rem;
      height: 12rem;
    }
  }
`;

export const ButtonsContainer = styled.section`
  @media (min-width: 320px) {
    align-items: center;  
    border-radius: 50px 50px 0 0;
    border: 1px solid transparent;
    background: ${theme.colors.background.white};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1.5rem 0;
    width: 100%;

  .favoriteBtn {
    border-top: 1px solid ${theme.colors.button.borderButton};
    border-bottom: 1px solid ${theme.colors.button.borderButton};
    padding: 1rem;
  }
    button {
      color: ${theme.colors.text.extraLightText};
      margin: 0.5rem;
      font-weight: bold;
      font-size: 1.1rem;
      height: 4.0rem;
      width: 70%;
      &:hover { color: ${theme.colors.text.selectedText}; }
    }
  }

  @media (min-width: 768px) {
    padding: 5rem 0;
    button {
      font-size: 1.7rem;
      width: 40%;
    }
  }
`;

export const CounterContainer = styled.section`
  @media(min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.background.white};
    border-radius: 7px;
    width: 25rem;
    padding: 1rem 1rem;
    margin-bottom: -2rem;
    box-shadow: 0px 7px 8px -1px rgba(0, 0, 0, 0.5);
    width: 95%;
    z-index: 1;
    
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35%;
      margin: 0 0.5rem;     
    }
    
    h2 {
      text-align: center;
      font-weight: bold;
      font-size: 1.3rem;
    }

    p { font-size: 0.8rem; }
    
    hr {
      border: none;
      border-left: 1px solid ${theme.colors.button.borderButton};
      height: 3rem;
      width: 2px;
    }
    
  }
  @media(min-width: 768px) {
    p { font-size: 1rem; }
    padding: 1rem 2rem;
    width: 60%;
  }
  @media(min-width: 1280px) {
    width: 35%;
  }
`;

export const ChangeImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 7px;
    color: ${theme.colors.text.text};
    padding: 0.5rem;

    &:focus { outline: none; }
  }

  button {
    background-color: ${theme.colors.button.disableBtn};
    border-radius: 7px;
    width: 8rem;
    height: 2rem;
    font-weight: 500;
  }

  button:hover{
    background-color: ${theme.colors.button.hoverBtn};
    border: 2px solid ${theme.colors.button.selectedBtn};
    color: ${theme.colors.text.text};
  }
`;
