/* eslint-disable max-len */
import styled from 'styled-components';
import theme from '../../theme';

export const HeaderMainDiv = styled.div`
  background: ${theme.colors.background.first};
`;

export const TopIconsDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem;
`;

export const Title = styled.img`
  width: 140px;
  height: 50px;
  object-fit: cover;

  @media(min-width: 1280px) {
    margin-left: 1rem;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;  

  @media (min-width: 320px) {
    height: 30px;
    width: 30px;
  }
`;
