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

  @media (min-width: 1024px) {
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

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
    gap: 1rem;
  }
`;

export const PageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin-bottom: 3rem;

  button {
    width: 1.7rem;
    margin: 0.5rem;
    background-color: #ff5c16;
    color: #fff;
    border-radius: 7px;
    transition: 0.3s ease;

    &:hover {
      background-color: #d14e16;
    }
  }

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;
