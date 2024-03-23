import styled, { css } from 'styled-components';

export const Div = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(189,189,189,1);
  margin: 1rem;
  padding: 1rem;
  width: 30rem;
  height: 10rem;

  @media (min-width: 768px) {
    width: 44%;
    padding: 0.7rem;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  @media (min-width: 1280px) {
    width: 29%;
    padding: 0.5rem;
  }

  @media (min-width: 1444px) {
    width: 25%;
  }
`;

export const TextContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0.5rem;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1280px) {
    padding-left: 0.8rem;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
`;

export const NameFavorite = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    
  }
`;

export const RecipeCategories = styled.div`
  align-items: self-start;
  display: flex;
  justify-content: space-between;
  width: fit-content;
  gap: 7px;
`;

export const PCategory = styled.p`
  font-size: 1rem;
`;

export const Details = styled.button`
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  color: white;
  font-weight: bold;
  background: rgba(255, 77, 0, 0.912);
  border-radius: 7px;
  height: 30px;
  width: 160px;
  transition: 0.3s ease;

  img {
    padding-top: 2px;
    width: 15px;
  }

  &.Continue {
    background: rgba(195, 58, 0, 0.912);
  }

  &:hover {
    background-color: #d14e16;
    color: #000;
    cursor: pointer;
  }
`;

export const H1 = styled.p`
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 320px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

`;

export const Img = styled.div<{ src: string }>`  
  border-radius: 10px;  
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 8rem;
  padding: 0.3rem;
  
  img {
    width: 1.6rem;
  }

  @media (min-width: 768px) {
    height: 100%;
    width: fit-content;
  }

  @media (min-width: 1280px) {
    height: 100%;
    width: fit-content;
    border-radius: 10px;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.1);
      border-radius: 10px 0 0 10px;
    }
  }
`;
