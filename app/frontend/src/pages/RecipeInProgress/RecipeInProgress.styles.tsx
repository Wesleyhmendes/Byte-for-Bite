import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 100%;  
  @media (min-width: 768px) {
   
  }
`;

export const RecipeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }
`;

export const RecipeInfo = styled.div<{ imgsrc: string }>`
  align-items: end;
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 40px 40px;
  display: flex;
  height: 350px;
  max-height: fit-content;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const IngredientsDiv = styled.div`
  background-color: ${theme.colors.background.white};
  box-shadow: 1px 2px 2px 0px rgba(189,189,189,1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  margin: 2rem 1rem;
  padding: 1rem;
  width: 95%;

  label {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 3rem;
    gap: 1.5rem;
    width: 100%;

    & div {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      padding-left: 2rem;
      width: 100%;
      text-align: start;      
    }

    & input {
      margin-right: 1rem;
    }

    & hr {
      width: 20%;
    }

    & p {
      color: ${theme.colors.text.text};
      text-align: center;      
      width: 30%;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Instructions = styled.div`
  background-color: ${theme.colors.background.white};
  box-shadow: 1px 2px 2px 0px rgba(189,189,189,1);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 95%;

  & h2 {
    color: ${theme.colors.text.title};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & p {
    color: ${theme.colors.text.text};
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Video = styled.iframe`
  @media (min-width: 320px) {
    border: none;
    border-radius: 10px;
    height: 15rem;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    width: 95%;
  }

  @media (min-width: 768px) {
    height: 20rem;
    width: 70%;
  }

  @media (min-width: 1280px) {
    height: 25rem;
    width: 60%;
  }
`;

export const FinishRecipe = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: ${theme.colors.button.activeBtn};
    border-radius: 7px;
    color: #fff;
    font-weight: 500;
    padding: 0.4rem 1rem 0.4rem 1rem;
    transition: 0.3s ease;
    width: fit-content;


    &:hover {
      background-color: ${theme.colors.button.hoverBtn};
      color: #000;
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
      background-color: ${theme.colors.button.disableBtn};
      color: ${theme.colors.text.text};
    }
  }
`;
