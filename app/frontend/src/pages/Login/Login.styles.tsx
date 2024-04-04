/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  align-items: center;
  background: #FF4B00;
  display: flex;
  height: 100vh;
  margin-bottom: -7rem;
  width: 100%;


  section {
    @media(min-width: 320px) {
      background: #fff;
      box-shadow: 0px 2px 5px 0px rgba(133,133,133,1);
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
      background: #cccccc88;
      border-radius: 10px;
      border: none;
      color: #000000;
      height: 2.5rem;
      padding-left: 1rem;
      width: 100%;
    }

    button {
      background-color: #ff4b00;
      border-radius: 7px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      height: 2.5rem;
      margin: 1rem 0 1rem;
      transition: 0.3s ease;
      width: 100%;

      &:hover {
        background-color: #d14e16;
        cursor: pointer;
        color: black;
      }

      &:disabled {
        cursor: pointer;
        background-color: #828282;
        color: #fff;
      }

      &.google-oauth {
        background-color: transparent;
        width: 100%;      
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
  color: blue;
  font-weight: bold;
  text-decoration: underline;

  &:hover { cursor: pointer; }
`;

export const StyledLink = styled(Link)`
  
`;

export const NoAccountDiv = styled.div`
  text-align: center;

  Link {
    
  }
`;
