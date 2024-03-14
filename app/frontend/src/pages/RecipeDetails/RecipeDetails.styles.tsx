import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: -7rem;
  background-color: #ff4b00;

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipeCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 2rem 0;
  background-color: #fff;
  height: 100vh;
  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const TitleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  margin: 1rem 0;
  justify-content: space-between;  
  border-radius: 7px;   

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const RecipeImage = styled.img`
  width: 20rem;
  height: 20%;
  border-radius: 7px; 

  @media (min-width: 320px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const IngredientsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #BEBEBE;
  border-radius: 7px;
  width: 60%;
  justify-content: center;
  text-align: center; 
  margin-bottom: 2rem;
  padding: 1rem;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
  }

  p {
    width: 45%; 
    text-align: center; 
  }

  hr {
    color: #000;
    width: 2rem;    
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

export const Button = styled.button`
  background-color: #ff4b00;
  color: #fff;
  width: 20%;
  height: 5%;
  border-radius: 7px;
  font-weight: 600;
  transition: 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    background-color: #a73504;
    color: #000;
    cursor: pointer;
  }
`;
