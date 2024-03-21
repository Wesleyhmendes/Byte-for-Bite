/* eslint-disable max-lines */
import styled, { css } from 'styled-components';

export const Div = styled.div`

  @media (min-width: 320px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Form = styled.form`
 
  
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Filters = styled.div`
  background-color: rgb(255, 255, 255, 0.95);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Label = styled.label`
 
  

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const LabelSearch = styled.label`
  display: flex;
  justify-content: center;

  @media (min-width: 320px) {
    
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;

export const InputSearch = styled.input`

  @media (min-width: 320px) {
    padding-left: 0.6rem;
    height: 30px;
    border-radius: 10px 0 0 10px;
    width: 70%;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Lupe = styled.img` 

  @media (min-width: 320px) {
    height: 30px;
    background-color: #ffffff;
    border-radius: 0 10px 10px 0;
    border-left: 2px solid #c0c0c0;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Button = styled.button`
  border: none;
  background: transparent;
`;

export const FilterP = styled.p<{ className: string }>`

  font-weight: 600;
  text-align: center;
 
 ${(props) => props.className === 'active' && css`
    color: rgb(255,75,0);
    border-bottom: 2px solid rgb(255,75,0);
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
