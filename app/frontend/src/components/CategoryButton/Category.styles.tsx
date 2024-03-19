import styled from 'styled-components';

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  border: 1px solid #BEBEBE;
  border-radius: 20px;
  margin: 0 0.5rem;  
  transition: 0.3s ease;
  font-weight: bold;

&:hover {
  background-color: #FF5C16;
  color: #fff;
  border: none;
}
`;
