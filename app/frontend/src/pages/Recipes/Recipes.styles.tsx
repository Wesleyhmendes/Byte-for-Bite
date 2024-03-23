import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 1.5rem 0 0rem 0;

  @media (min-width: 768px) {
    gap: 1rem;
  }
  @media (min-width: 1280px) {
    footer {
      display: none;
    }
    align-items: flex-start;
    margin-top: 2rem;
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    padding: 0;
    gap: 0rem;
    width: 85%;
  }

  @media (min-width: 1444px) {
    margin-top: 0rem;
  }
`;

export const PageButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
      background-color: #ffffff;
      box-shadow: 0px 1px 1px 0px rgba(189,189,189,1);
      color: #ff5c16;
      font-weight: bold;
    }
  }

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    margin-top: 0rem;
    margin-left: 13rem;
  }

  @media (min-width: 1444px) {
  }
`;

export const AsideBtn = styled.div`
  display: flex;
  align-items: end;
  p { margin: 0 0.3rem; }
`;
