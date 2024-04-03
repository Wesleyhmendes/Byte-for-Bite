/* eslint-disable max-lines */
import styled, { css } from 'styled-components';

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
  background: #f4f4f4;
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
    height: 30px;
    background-color: #ffffff;
    border-radius: 0 10px 10px 0;
    border-left: 2px solid #c0c0c0;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
`;

export const FilterP = styled.p<{ className: string }>`
  font-weight: 600;
  text-align: center;
  color: rgb(56, 56, 56);
 
 ${(props) => props.className === 'active' && css`
    color: #FE5B15;
    border-bottom: 2px solid #FE5B15;
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
