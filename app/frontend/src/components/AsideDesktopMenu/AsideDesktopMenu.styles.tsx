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
  padding-left: 2rem;
  width: 15%;

  .active {
    border-bottom: 2px solid #FE5B15;
    color: #FE5B15;
  }

  div {
    h2 {
      font-size: x-large;
      color: #b0b0b0;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      border: none;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      transition: ease 0.3s;
      width: fit-content;

      &:hover {
        color: #FE5B15;
      }
    }
  }
}
`;
