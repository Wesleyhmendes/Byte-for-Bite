import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  h3 {
    color: #4b4b4b;
    font-weight: bold;
    font-size: 25px;
  }

  button {
    background-color: #FF4B00;
    border-radius: 7px;
    color: #FFF;
    font-size: 20px;
    font-weight: 600; 
    height: 2.5rem;
    margin: 1rem 0 1rem;
    transition: 0.3s ease;
    width: 100%;

    &:hover {
      background-color: #d14e16;
      cursor: pointer;
      color: black;
    }
  }
`;
