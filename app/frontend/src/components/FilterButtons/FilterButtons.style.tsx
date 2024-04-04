import styled from 'styled-components';
import theme from '../../theme';

export const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FilterButton = styled.button`
  background: ${theme.colors.background.white};
  width: 10rem;
  height: 3rem;
  border: 1px solid ${theme.colors.button.borderButton};
  border-radius: 20px;
  margin: 0 0.5rem;
  transition: 0.3s ease;
  font-weight: bold;
  margin-bottom: 4rem;

  &:hover {
    background-color: ${theme.colors.button.activeBtn};
    color: ${theme.colors.text.whiteText};
  }
`;
