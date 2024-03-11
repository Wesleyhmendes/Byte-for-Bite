import styled, { css } from 'styled-components';

export const FooterStyled = styled.footer`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px -5px 9px -2px rgba(0,0,0,0.45);
  border-radius: 15px 15px 0 0;
  bottom: 0;
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-bottom: -0.5px;
  padding-bottom: 1.4rem;
  padding-top: 0.3rem;
  position: fixed;
  text-align: center;
  width: 100%;

  @media (min-width: 320px) {
    
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    padding-left: 13rem;
    padding-right: 13rem;
  }

`;

export const Button = styled.button`
  
  

  @media (min-width: 320px) {
    
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Icon = styled.img`
  
  width: 45px;
  height: 40px;
  padding-bottom: 0.5rem;

`;

export const IconMeal = styled.img`
  
  width: 45px;
  height: 40px;
  padding-bottom: 0.5rem;
  

  ${(props) => props.className === '/meals' && css`
    border-bottom: 3px solid #FF4B00;
  `}

`;

export const IconDrinks = styled.img`
  
  width: 45px;
  height: 40px;
  padding-bottom: 0.5rem;

  ${(props) => props.className === '/drinks' && css`
    border-bottom: 3px solid #FF4B00;
  `}

`;
