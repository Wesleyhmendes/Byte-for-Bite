import styled from 'styled-components';

type RecipeInfoProps = {
  imgSrc: string,
};

type FinishButtonProps = {
  isDone: boolean,
};

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const RecipeInfo = styled.div<RecipeInfoProps>`
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
  box-shadow: -1px 0px 5px 2px rgba(163,163,163,1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  margin: 2rem 1rem 2rem 1rem;
  padding: 1rem;

  label {
    display: flex;
    gap: 0.7rem;
  }
`;

export const Instructions = styled.p`
  margin: 0 auto;
  width: 95%;
`;

export const Video = styled.iframe`
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  width: 95%;
`;

export const FinishRecipe = styled.button<FinishButtonProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    background-color: ${(props) => (props.isDone ? '#ff4b00' : 'grey')};
    border-radius: 7px;
    color: #fff;
    font-weight: 600;
    padding: 0.4rem 1rem 0.4rem 1rem;
    transition: 0.3s ease;
    width: fit-content;

    &:hover {
      background-color: ${(props) => (props.isDone ? '#a73504' : 'grey')} ;
      color: #000;
      cursor: pointer;
    }
  }
`;
