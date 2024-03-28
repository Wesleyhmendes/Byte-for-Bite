import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  background-color: #FF4B00; // #FF4B00
  margin-bottom: -7rem;
  display: flex;
  justify-content: center;

  section {
    align-items: center;
    background: #fff;
    border-radius: 0 0 35px 35px;
    box-shadow: 2px 0px 5px 0px rgba(140,140,140,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    padding-bottom: 1.5rem;

    div {
      display: flex;
      justify-content: center;
      img {
        width: 50%;
      }
    }

    .google {
      margin-bottom: 1rem;
    }

    @media(min-width: 768px) {
      width: 70%;
    }

    @media(min-width: 1280px) {
      width: 50%;
    }

    @media(min-width: 1444px) {
        width: 40%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    align-self: center;
    background: #f4f4f4;
    border-radius: 10px;
    border: none;
    color: #000000;
    /* height: 2.5rem; */
    margin-top: 1rem;
    padding-left: 1rem;
    width: 22rem;
    transition: ease 0.3s;
  }

  input:focus {
    outline: none;

  }
  
  .invalid:focus {
    border-bottom: 0;
    box-shadow: 0px 0px 5px 1px rgba(255,0,0,1);
  }

  .valid:focus {
    border-bottom: 0;
    box-shadow: 0px 0px 5px 1px #199206;
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

    &:disabled {
      cursor: pointer;
      background-color: #828282;
      color: #FFF; 
    }
  }

  @media(min-width: 768px) {
    /* label { font-size: larger; } */
    input { height: 3rem; }
    button { height: 3rem; margin-top: 2rem; }
  }

  @media(min-width: 1280px) {
    
  }

  @media(min-width: 1444px) {
      
  }
`;

export const Label = styled.label`
  
  

`;

export const Inputs = styled.input`
  
  

`;

export const Button = styled.button`
  
  

`;
