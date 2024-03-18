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
  width: 70%;
`;

export const RecipeInfo = styled.div`
  align-items: end;
  background-image: url(${(props: {imgSrc: string}) => props.imgSrc});
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
  box-shadow: -1px 0px 5px 2px rgba(163,163,163,1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  margin: 2rem 1rem;
  padding: 1rem;
  width: 100%;

  label {
    display: flex;
    gap: 0.7rem;
  }
`;

export const Instructions = styled.p`
  margin-bottom: 2rem;
`;

export const Video = styled.iframe`
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  margin-top: 2rem;  
`;

export const FinishRecipe = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: ${(props: {isDone: boolean}) => (props.isDone ? '#ff4b00' : 'grey')};
    border-radius: 7px;
    color: #fff;
    font-weight: 600;
    padding: 0.4rem 1rem 0.4rem 1rem;
    transition: 0.3s ease;
    width: fit-content;

    &:hover {
      background-color: ${(props: {isDone: boolean}) => (props.isDone ? '#d14e16' : 'grey')} ;
      color: #000;
      cursor: pointer;
    }
  }
`;
