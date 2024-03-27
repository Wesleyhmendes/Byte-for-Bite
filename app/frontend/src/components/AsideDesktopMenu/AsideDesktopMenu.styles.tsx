import styled from 'styled-components';

export const Section = styled.section`
@media (min-width: 320px) {
  display: none;
}
@media (min-width: 1280px) {
  border-right: 1px solid #adadad;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 2rem;
  height: 70vh;
  padding-left: 1rem;
  width: 15%;

  div {
    h2 {
      font-size: x-large;
      color: #b0b0b0;
    }
    gap: 1rem;
  }
}

  @media (min-width: 1444px) {
    padding-left: 2rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  
  a {    
    display: flex;    
    flex-direction: row;    
    align-items: center;
    gap: 0.3rem;
    transition: ease 0.3s;
    width: fit-content;    
    
    &:hover {
      color: #FE5B15;
    }

  }

  .active {
    border-bottom: 2px solid #FE5B15;
    color: #FE5B15;
  }

  p {
    text-align: left;
  }

  img {
    width: 29px;
  }
`;
