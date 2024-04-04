import styled from 'styled-components';
import theme from '../../../theme';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  h3 {
    color: ${theme.colors.text.title};
    font-weight: bold;
    font-size: 25px;
  }

  button {
    background-color: ${theme.colors.button.activeBtn};
    border-radius: 7px;
    color: ${theme.colors.text.text};
    font-size: 20px;
    font-weight: 600; 
    height: 2.5rem;
    margin: 1rem 0 1rem;
    transition: 0.3s ease;
    width: 100%;

    &:hover {
      background-color: ${theme.colors.button.hoverBtn};
      cursor: pointer;
      color: ${theme.colors.text.whiteText};
    }
  }
`;
