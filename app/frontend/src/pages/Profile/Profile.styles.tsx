import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #FF5C16;
  align-items: center;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;  
  border: 1px solid transparent;
  border-radius: 50px 50px 0 0;
  background: #ffffff;
  padding-top: 5rem; 
  
  button {
    color: #a1a1a3;
    margin: 0.5rem;
    font-weight: bold;
  }

  .favoriteBtn {
    border-top: 1px solid #dbdde0;
    border-bottom: 1px solid #dbdde0;
    padding: 1rem;
  }

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
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

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
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
