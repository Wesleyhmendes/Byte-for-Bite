import styled from 'styled-components';

export const Button = styled.button`
  background: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(189,189,189,1);
  border-radius: 1rem;
  height: 2rem;
  margin: 0 0.5rem;  
  padding: 0.3rem 1rem;
  transition: 0.3s ease;
  width: 10rem;
    
   &:hover {
    background-color: #FF5C16;
    color: #fff;
    border: none;
  }

  .active {
    border: 3px solid blue;
  }
`;
