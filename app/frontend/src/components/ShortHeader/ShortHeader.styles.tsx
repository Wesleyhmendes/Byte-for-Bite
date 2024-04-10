import styled from 'styled-components';
import theme from '../../theme';

export const Header = styled.header`
  background: ${theme.colors.background.first};
  box-shadow: 1px 1px 3px 0px rgba(189,189,189,1);
  margin-bottom: 1rem;
  width: 100%;
`;

export const OuterDiv = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;

  .page-logo {
    width: 6rem;
    object-fit: cover;
    height: 4rem;
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
