import styled from 'styled-components';
import theme from '../../theme';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin-bottom: -4.5rem;
`;

export const RecipeCard = styled.section`
  @media (min-width: 320px) {
    align-items: center;
    background-color: ${theme.colors.background.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const TitleAndButtonContainer = styled.div`
  align-items: center;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  margin: 1rem 0;
  width: 95%;
  z-index: 2;

  div {
    margin-left: 1.5em;
    h2 {
      color: ${theme.colors.text.whiteText};
      font-size: 30px;
      font-weight: 500;
    }
    p { color: ${theme.colors.text.whiteText}; }
  }

  @media (min-width: 768px) {
    div { 
      margin-left: 3rem;
      margin-bottom: 1rem;
      h2 { font-size: 35px; }
      p { font-size: 20px; }
    }
  }
`;

export const RecipeImageDiv = styled.div<{ imageurl: string; }>`
  align-items: end;
  background-image: url(${(props) => props.imageurl});
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

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 40px 40px;
  background: linear-gradient(0deg, #000000 0%, rgba(255,255,255,0) 80%);
  z-index: 1;
`;

export const IngredientsContainer = styled.ul`
  @media(min-width: 320px) {
    background-color: ${theme.colors.text.whiteText};
    box-shadow: 1px 2px 5px 0px rgba(189,189,189,1);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center; 
    width: 95%;

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
      color: ${theme.colors.text.text};
      width: 2rem;    
    }
  }

  @media(min-width: 768px) {
    hr {
      width: 10rem;
    }
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.button.activeBtn};
  border-radius: 7px;
  color: ${theme.colors.text.whiteText};
  font-weight: 600;
  height: 5%;
  margin-bottom: 6rem;
  padding: 0.4rem 1rem 0.4rem 1rem;
  transition: 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: ${theme.colors.button.hoverBtn};
    color: ${theme.colors.text.text};
    cursor: pointer;
  }
`;
