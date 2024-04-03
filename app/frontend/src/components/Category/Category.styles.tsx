import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ItemButton = styled(motion.div)`
  padding: 0.3rem 0;
`;

export const InnerCarousel = styled(motion.div)<{ drag: string, dragConstraints: any }>`
  display: flex;
`;

export const Carousel = styled(motion.div)<{ whileTap: any }>`
  cursor: grab;
  overflow: hidden;
`;
