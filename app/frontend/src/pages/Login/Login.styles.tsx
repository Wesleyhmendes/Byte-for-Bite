/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  margin-bottom: -7rem;
  background-color: #FF4B00;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export const Section = styled.section`
  background-color: #ffffff;
  box-shadow: 0px 0px 14px -2px rgba(0,0,0,0.75);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  width: 70%;


  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    height: 68vh;
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    height: 80vh;
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

`;

export const Form = styled.form`
  margin-bottom: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: #eeeeee;
  padding-left: 20px;
  width: 90%;

  &::placeholder {
    color: #828282;
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
  display: inline-block;
  line-height: 0;
  color: #484848;
  font-weight: 500;
  text-align: center;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin: 0 auto;


  @media (min-width: 320px) {

  }

  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    
  }

  @media (min-width: 1280px) {
    
  }
`;

export const PhraseLink = styled(Link)`
  line-height: 0;
  color: #0026ff;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  width: 100%;

`;

export const NoAccountDiv = styled.div`
  margin-bottom: 1rem;
  text-align: center;

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

export const StyledLink = styled(Link)`

  color: #3131ff;
  text-decoration: underline;

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

  background-color: #FF4B00;
  border-radius: 7px;
  color: #FFF;
  font-size: 20px;
  font-weight: 700; 
  height: 37px;
  width: 90%;
  transition: 0.3s ease;

  &:hover {
    background-color: #a73504;
    cursor: pointer;
    color: black;
  }

  &:disabled {
    cursor: default;
    background-color: #828282;
    color: #FFF; 
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
