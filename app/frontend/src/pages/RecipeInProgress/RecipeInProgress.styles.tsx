import styled from 'styled-components';

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

export const RecipeInfo = styled.div<{ imgSrc: string }>`
  align-items: end;
  background-image: url(${(props) => props.imgSrc});
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
  background-color: #fff;
  box-shadow: -1px 0px 5px 2px rgba(163,163,163,1);
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
      width: 30%;
      text-align: center;      
    }
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Instructions = styled.div`
  background-color: #fff;
  box-shadow: -1px 0px 5px 2px rgba(163, 163, 163, 1);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 95%;

  & h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & p {
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
    background-color: #ff4b00;
    border-radius: 7px;
    color: #fff;
    font-weight: 600;
    padding: 0.4rem 1rem 0.4rem 1rem;
    transition: 0.3s ease;
    width: fit-content;


    &:hover {
      background-color: #d14e16;
      color: #000;
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
      background-color: grey;
      color: #fff;
    }
  }
`;
