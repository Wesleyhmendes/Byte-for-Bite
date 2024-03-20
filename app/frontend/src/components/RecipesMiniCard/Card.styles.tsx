import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(168, 168, 168, 0.4);
  margin: 1rem;
  padding: 1rem;
  width: 30rem;
  height: 10rem;

  /* @media (min-width: 768px) { width: 47%; }

  @media (min-width: 1280px) { width: 32%; } */
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  padding: 0 0.5rem;
  min-width: 65%;

  @media (min-width: 1280px) {
    padding-left: 1.5rem;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;  
`;

export const NameFavorite = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;  
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
  color: white;
  font-weight: bold;
  background: rgba(255, 77, 0, 0.912);
  border-radius: 7px;
  height: 30px;
  width: 160px;
  transition: 0.3s ease;

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
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 8rem;
  max-height: 8rem;
`;
