/* eslint-disable max-lines */
import styled from 'styled-components';

export const ModalDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H3 = styled.h3`
  color: #313131;
  font-size: larger;
  font-weight: 600;
  text-align: center;
  line-height: 0px;
  margin-bottom: 35px;
`;

export const Button = styled.button`
  @media (min-width: 320px) {
    background-color: #FF4B00;
    border-radius: 7px;
    color: #FFF;
    font-size: 20px;
    font-weight: 600; 
    height: 2.5rem;
    margin: 1rem 0 1rem;
    transition: 0.3s ease;
    width: 80%;

    &:hover {
      background-color: #d14e16;
      cursor: pointer;
      color: black;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1280px) {
    width: 50%;
  }

  @media (min-width: 1444px) {
    width: 45%;
  }
`;
