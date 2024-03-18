import styled from 'styled-components';

export const Main = styled.main`  
  
  height: 100vh;
  background-color: #FF4B00;
  margin-bottom: -7rem;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Section = styled.section`  
  border: 1px solid transparent;
  border-radius: 0 0 50px 50px;
  background: #ffffff;

  @media (min-width: 320px) {
    min-height: 85%;
  }

  @media (min-width: 768px) {
    min-height: 55%;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    width: 40%;
    margin: 0 auto;
  }

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

`;

export const Logo = styled.img`
  width: 55%;
  margin-left: 2rem;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1280px) {
    width: 25%;
  }

`;

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;

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
  
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Inputs = styled.input`
  
  background: #e2e2e2;
  padding-left: 1rem;
  border-radius: 10px;

  @media (min-width: 320px) {
    height: 50px;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;

export const Button = styled.button`
  
  margin-top: 1.5rem;
  border: none;
  background-color: #FF4B00;
  width: 325px;
  color: #FFF;
  border-radius: 7px;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    background-color: #a73504;
    color: #000;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    background-color: #828282;
    color: #FFF; 
  }  

  @media (min-width: 320px) {
    min-height: 50px;
    margin-bottom: 0.7rem;
  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }

`;
