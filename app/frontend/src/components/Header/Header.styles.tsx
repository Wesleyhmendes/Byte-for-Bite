/* eslint-disable max-len */
import styled from 'styled-components';

export const HeaderStyle = styled.header`

 background: linear-gradient(to bottom, rgba(255,255,255,0) 70%, #000000 100%);
`;

export const HeaderMainDiv = styled.div`
  background: rgba(255, 77, 0, 0.912);
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
`;

export const ProfileImg = styled.img`
  border-radius: 50%;  

  @media (min-width: 320px) {
    height: 30px;
    width: 30px;
  }
`;
