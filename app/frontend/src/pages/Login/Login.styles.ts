/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-end;
  background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.9));

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
  color: red;
`;

export const BackgroundImgMobile = styled.img`

  position: absolute;
  width: 100%;
  height: 100vh;
  filter: blur(3px);
  z-index: -1;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    display: none;
  }

  @media (min-width: 1280px) {
    display: none;
  }
  color: red;
`;

export const BackgroundImgDesktop = styled.img`

  position: absolute;
  width: 100%;
  height: 100vh;
  filter: blur(3px);
  z-index: -1;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    filter: blur(4px) brightness(0.6);
  }

  @media (min-width: 1280px) {
    width: 100%;
    filter: blur(4px) brightness(0.6);
  }
  color: red;
`;

export const Logo = styled.img`

  width: 55%;
  margin-bottom: -100px;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 25%;
  }
  color: red;
`;

export const LogoDiv = styled.div`
  
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }

  @media (min-width: 1280px) {

  }
  color: red;
`;

export const FormMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin: 0 auto;
  width: fit-content;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
    width: 55%;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
  color: red;
`;

export const Form = styled.form`
  margin-bottom: -15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: 1280px) {
    width: 50%;
    
  }
`;

export const Inputs = styled.input`

  border: none;
  border-radius: 7px;
  height: 37px;
  background-color: #C0C0C0;
  padding-left: 20px;

  &::placeholder {
    color: #FFFFFF;
  }

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    border-radius: 10px;
    height: 55px;
    
    &::placeholder {
      font-size: 21px;
    }
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;

export const Phrase = styled.p`

  color: #FFFFFF;
  font-weight: 500;
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

export const NoAccountDiv = styled.div`
  margin: 0 auto;
  height: 37px;
  width: fit-content;
  margin-bottom: 25px;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    font-size: 21px;
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
  height: 37px;

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
