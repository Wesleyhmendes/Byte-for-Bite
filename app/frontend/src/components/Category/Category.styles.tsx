import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ItemButton = styled(motion.div)`
  button {
    background: #ffffff;
    border-radius: 1rem;
    height: 2rem;
    margin: 0 0.5rem;  
    padding: 0.3rem 1rem;
    transition: 0.3s ease;
    width: 10rem;
    
    &:hover {
      background-color: #FF5C16;
      color: #fff;
      border: none;
    }
  }
`;

export const InnerCarousel = styled(motion.div)<{ drag: string, dragConstraints: any }>`
  display: flex;
`;

export const Carousel = styled(motion.div)<{ whileTap: any }>`
  cursor: grab;
  overflow: hidden;
`;
