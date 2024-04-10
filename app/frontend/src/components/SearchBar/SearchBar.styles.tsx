/* eslint-disable max-lines */
import styled, { css } from 'styled-components';
import theme from '../../theme';

export const Div = styled.div`
    margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: #fff;
    font-size: large;
    padding: 1rem 0 0.5rem 0;
  }
`;

export const Filters = styled.div`
  background: ${theme.colors.background.background};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
`;

export const LabelSearch = styled.label`
  display: flex;
  justify-content: center;
`;

export const InputSearch = styled.input`
    padding-left: 0.6rem;
    height: 30px;
    border-radius: 10px 0 0 10px;
    width: 70%;
`;

export const Lupe = styled.img` 
    height: 30.72px;
    border-radius: 0 10px 10px 0;
    margin-left: -0.2px;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
`;

export const FilterP = styled.p<{ className: string }>`
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.text.text};
 
 ${(props) => props.className === 'active' && css`
    color: ${theme.colors.text.selectedText};
    border-bottom: 2px solid ${theme.colors.button.activeBtn};
  `}

  &:hover {
    cursor: pointer;
  }
`;

export const InputIngredient = styled.input`
  display: none;
`;

export const InputName = styled.input`
 display: none;
`;

export const InputFirstLetter = styled.input`
 display: none;
`;
