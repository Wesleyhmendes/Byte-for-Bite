import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.main`
  height: 100vh;
  background-color: ${theme.colors.background.first};
  margin-bottom: -7rem;
  display: flex;
  justify-content: center;

  section {
    align-items: center;
    background: ${theme.colors.background.white};
    border-radius: 0 0 35px 35px;
    box-shadow: 2px 0px 5px 0px rgba(140,140,140,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    padding-bottom: 1.5rem;

    div {
      display: flex;
      justify-content: center;
      img {
        width: 30%;
      }
    }

    .google {
      margin-top: 1rem;
    }

    @media(min-width: 768px) {
      div { img { width: 50%; }}
      width: 70%;
    }

    @media(min-width: 1280px) {
      width: 50%;
    }

    @media(min-width: 1444px) {
        width: 40%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    align-self: center;
    background: ${theme.colors.input.inputDefault};
    border-radius: 10px;
    border: none;
    color: ${theme.colors.text.text};
    height: 2.5rem;
    margin-top: 1rem;
    padding-left: 1rem;
    width: 22rem;
    transition: ease 0.3s;
  }

  .confirm {
    margin-bottom: 1rem;
  }

  input:focus {
    outline: none;
  }
  
  .invalid:focus {
    border-bottom: 0;
    box-shadow: 0px 0px 5px 1px ${theme.colors.input.redInput};
  }

  .valid:focus {
    border-bottom: 0;
    box-shadow: 0px 0px 5px 1px ${theme.colors.input.greenInput};
  }
  

  button {
    background-color: ${theme.colors.button.activeBtn};
    border-radius: 7px;
    color: ${theme.colors.text.whiteText};
    font-size: 20px;
    font-weight: 600; 
    height: 2.5rem;
    margin: 1rem 0 1rem;
    transition: 0.3s ease;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.button.hoverBtn};
      cursor: pointer;
      color: black;
    }

    &:disabled {
      cursor: pointer;
      background-color: ${theme.colors.button.disableBtn};
      color: ${theme.colors.text.whiteText};
    }
  }

  @media(min-width: 768px) {
    input { height: 3rem; }
    button { height: 3rem; margin-top: 2rem; }
  }
`;
