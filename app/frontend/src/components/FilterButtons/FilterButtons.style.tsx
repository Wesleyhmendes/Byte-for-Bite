import styled from 'styled-components';

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const FilterButton = styled.button`
  background: #fff;
  width: 10rem;
  height: 3rem;
  border: 1px solid #bebebe;
  border-radius: 20px;
  margin: 0 0.5rem;
  transition: 0.3s ease;
  font-weight: bold;
  margin-bottom: 4rem;

  &:hover {
    background-color: #ff5c16;
    color: #fff;
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
