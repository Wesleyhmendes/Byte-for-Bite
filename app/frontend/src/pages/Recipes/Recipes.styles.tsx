import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: -7rem;

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

export const PageButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  width: 80%;

  button {
    background-color: #ff5c16;
    border-radius: 7px;
    color: #fff;
    font-weight: 500;
    height: 1.6rem;
    margin: 0.5rem;
    transition: 0.3s ease;
    width: 1.8rem;
    
    &:hover { background-color: #d14e16; }  
  }

  .selected {
    button {
      background-color: #ededed;
      color: #ff5c16;
      font-weight: bold;
    }
  }

  @media (min-width: 320px) {
    width: 100%;
  }
`;

export const AsideBtn = styled.div`
  display: flex;
  align-items: end;
  p { margin: 0 0.3rem; }
`;
