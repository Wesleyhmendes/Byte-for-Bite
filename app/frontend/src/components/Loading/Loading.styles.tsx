import styled from 'styled-components';

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  margin-bottom: -7rem;

  img {
    height: 100vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const Mobile = styled.img`
  @media(min-width: 320px) {
    display: inline;
  }

  @media(min-width: 768px) {
    display: none;
  }
`;

export const Tablet = styled.img`
  @media(min-width: 320px) {
    display: none;
  }

  @media(min-width: 768px) {
    display: inline;
  }

  @media(min-width: 1280px) {
    display: none;
  }
`;

export const Desktop = styled.img`
  @media(min-width: 320px) {
    display: none;
  }

  @media(min-width: 1280px) {
    display: inline;
    z-index: 99;
    height: 100vh;
    width: 100vh;
  }
`;
