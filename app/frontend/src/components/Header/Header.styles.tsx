/* eslint-disable max-len */
import styled, { css } from 'styled-components';
import fruits from '../../assets/Icons/header-background.png';
import drinks from '../../assets/Images/bgImgDrink.png';

export const HeaderStyle = styled.header`
 
 background: linear-gradient(to bottom, rgba(255,255,255,0) 70%, #000000 100%);

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const HeaderMainDiv = styled.div`

  ${(props) => props.className === 'Meals' && css`
    background-image: url(${fruits});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  ${(props) => props.className === 'Drinks' && css`
    background-image: url(${drinks});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  `}

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const TopIconsDiv = styled.div`
  
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const H1 = styled.h1`

  font-size: 25px;
  font-weight: 600;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const ProfileImg = styled.img`

  @media (min-width: 320px) {
    height: 30px;
    width: 25px;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;
