import styled, { css } from 'styled-components';

export const FooterStyled = styled.footer`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px -1px 3px 0px rgba(189,189,189,1);
  border-radius: 15px 15px 0 0;
  bottom: 0;
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-bottom: -0.5px;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  position: fixed;
  text-align: center;
  

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    justify-content: space-around;
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
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
