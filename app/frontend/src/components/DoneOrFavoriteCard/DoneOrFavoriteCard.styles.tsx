import styled from 'styled-components';

export const DoneOrFavoriteCard = styled.section`
  @media (min-width: 320px) {
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 0px rgba(189,189,189,1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.8rem;
    width: 100%;
    
    a {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    img {
      width: 6.3rem;
      border-radius: 7px;
    }

    h2 {
      font-size: 1.3rem;
    }

    div {
      padding: 1rem;
    }
  }

  @media (min-width: 768px) {
    width: 45%;
    margin: 1rem 1rem;
  }

  @media (min-width: 1280px) {
    width: 30%;
  }

  @media (min-width: 1444px) {
    width: 20%;
  }
`;
