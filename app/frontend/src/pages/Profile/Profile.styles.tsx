import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  background-color: #FF5C16;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-bottom: -7rem;
`;

export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FF5C16;
  color: #fff;
  margin-bottom: 1rem;

  h2 {
    font-size: 2rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  button {
    margin: 2rem;
  }
`;

export const ButtonsContainer = styled.section`
  @media (min-width: 320px) {
    align-items: center;  
    border-radius: 50px 50px 0 0;
    border: 1px solid transparent;
    background: #ffffff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 1.5rem 0;
    width: 100%;

  .favoriteBtn {
    border-top: 1px solid #dbdde0;
    border-bottom: 1px solid #dbdde0;
    padding: 1rem;
  }
    button {
      color: #a1a1a3;
      margin: 0.5rem;
      font-weight: bold;
      font-size: 1.1rem;
      height: 4.0rem;
      width: 70%;
      &:hover { color: #FD5B16; }
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  width: 15rem;
  padding: 1rem 2rem;
  margin-bottom: -2rem;
  box-shadow: 0px 7px 8px -1px rgba(0, 0, 0, 0.5);
  z-index: 1;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
  }

  hr {
    border: none;
    border-left: 1px solid #747474;
    height: 3rem;
    width: 2px;
  }
`;

export const ChangeImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 7px;
    color: #000;
  }

  button {
    border: 1px solid #fff;
    border-radius: 7px;
    width: 8rem;
    height: 2rem;
    transition: 0.3s ease;
    font-weight: bold;
  }

  button:hover{
    background-color: green;
  }
`;
