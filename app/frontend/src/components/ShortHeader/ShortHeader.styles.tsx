import styled from 'styled-components';

export const Header = styled.header`
  background: #FF5C16;
  box-shadow: 0px 3px 3px 0px rgba(189,189,189,1);
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  width: 100%;
`;

export const OuterDiv = styled.div`
  display: flex;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    width: 7rem;
  }
`;

export const Single = styled.div`
  width: 50px;
`;

export const Favorite = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  width: 100%;
  height: 2rem;
`;

export const Done = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  height: 50px;
  width: 140px;
`;

export const Progress = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  width: 100%;
  height: 10rem;
`;
