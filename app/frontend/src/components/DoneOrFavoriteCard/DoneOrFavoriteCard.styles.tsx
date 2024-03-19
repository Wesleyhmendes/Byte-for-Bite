import styled from 'styled-components';

export const DoneOrFavoriteCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  align-items: center;
  box-shadow: 0px 6px 9px -2px rgba(144, 144, 144, 0.75);
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem;
  width: 25rem;
  
  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  img {
    width: 150px;
    border-radius: 7px;
  }

  h2 {
    font-size: 1.3rem;
  }

  div {
    padding: 1rem;
  }
`;
