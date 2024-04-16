import styled from 'styled-components';
import theme from '../../theme';

export const NotFoundMain = styled.section`
  @media(min-width: 320px) {
    align-items: center;
    background-color: ${theme.colors.background.white};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    margin-bottom: -7rem;
    width: 100%;
    
    img {
      margin-bottom: 2rem;
    }

    h2 {
      font-size: larger;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    a {
      align-items: center; 
      background-color: ${theme.colors.button.activeBtn};
      border-radius: 7px;
      color: #fff;
      display: flex;
      font-weight: 500;
      justify-content: center;    
      padding: 0.5rem 1rem;
      width: fit-content;
    }

    & a:hover {
      background-color: ${theme.colors.button.hoverBtn};
    }
  }

  @media(min-width: 1280px) {
    img {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
`;