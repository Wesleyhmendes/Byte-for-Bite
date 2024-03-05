/* eslint-disable max-lines */
import styled from 'styled-components';

export const ModalDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 320px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 8rem;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;

export const H3 = styled.h3`
  
  color: #FFCE01;
  font-weight: 600;
  text-align: center;
  line-height: 0px;
  margin-bottom: 35px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;

export const Button = styled.button`
  
  background-color: #FFCE01;
  border: none;
  border-radius: 50px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 700; 
  height: 45px;
  width: 70%;

  &:hover {
    background-color: #DBB209;
    cursor: pointer;
  }

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    border-radius: 10px;
    height: 55px;
    font-size: 27px;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;
