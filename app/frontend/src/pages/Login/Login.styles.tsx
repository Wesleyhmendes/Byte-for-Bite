/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.div`
  align-items: center;
  background: ${theme.colors.background.first};
  display: flex;
  height: 100vh;
  margin-bottom: -7rem;
  width: 100%;


  section {
    @media(min-width: 320px) {
      background: ${theme.colors.background.white};
      box-shadow: 0px 2px 5px 0px ${theme.colors.background.lightGrey};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 1rem;
      width: 80%;

      img { margin: 0 auto; width: 70%; }

      .google {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 2rem;
      }
    }

    @media(min-width: 768px) {
      width: 70%;
      img { width: 50%; }

      .google {
        width: 65%;
      }
    }

    @media(min-width: 1280px) {
      width: 50%;
      img { width: 50%; }

      .google {
        width: 60%;
      }
    }

    @media(min-width: 1444px) {
      width: 45%;
      img { width: 45%; }

      .google {
        width: 40%;
      }
    }

  }
`;

export const FormMainDiv = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    input {
      background: ${theme.colors.input.inputDefault};
      border-radius: 10px;
      border: none;
      color: ${theme.colors.background.black};
      height: 2.5rem;
      padding-left: 1rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    button {

      background-color: ${theme.colors.background.first};
      border-radius: 7px;
      color: ${theme.colors.text.whiteText};

      font-size: 20px;
      font-weight: 600;
      height: 2.5rem;
      margin: 1rem 0 1rem;
      transition: 0.3s ease;
      width: 100%;

      &:hover {
        background-color: ${theme.colors.button.activeBtn};
        cursor: pointer;
        color: ${theme.colors.background.black};
      }

      &:disabled {
        cursor: pointer;

        background-color: #828282;
        color: #fff;
      }

      &.google-oauth {
        background-color: transparent;
        width: 100%;

        background-color: ${theme.colors.button.disableBtn};
        color: ${theme.colors.background.white}; 

      }
    }

    @media (min-width: 768px) {
      input {
        width: 65%;
      }
      button {
        width: 65%;
      }
    }

    @media (min-width: 1280px) {
      input {
        width: 60%;
      }
      button {
        width: 60%;
      }
    }

    @media (min-width: 1444px) {
      input {
        width: 40%;
      }
      button {
        width: 40%;
      }
    }
  }
`;

export const PhraseLink = styled(Link)`
  color: ${theme.colors.text.link};
  font-weight: bold;
  text-decoration: underline;

  &:hover { cursor: pointer; }
`;

export const StyledLink = styled(Link)`
  
`;

export const NoAccountDiv = styled.div`
  text-align: center;
`;
