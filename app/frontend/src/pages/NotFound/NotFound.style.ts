import styled from 'styled-components';
import theme from '../../theme';

export const NotFoundMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-bottom: -7rem;
  background-color: ${theme.colors.background.first};

  
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background.white};
  width: 30%;
  height: 50%;
  border-radius: 7px;

  & h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & img {
    width: 20rem;
  }

  & a {
    display: flex;
    justify-content: center;    
    align-items: center;
    width: 20%;
    height: 8%;    
    background-color: ${theme.colors.button.activeBtn};
    border-radius: 7px;
    color: #fff;
  }

  & a:hover {
    background-color: ${theme.colors.button.hoverBtn};
  }
`;
