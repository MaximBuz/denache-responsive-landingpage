import { motion } from 'framer-motion';
import styled from 'styled-components';

const draw = {
 hidden: { pathLength: 0, opacity: 0 },
 visible: (i) => {
  const delay = i * 0.4;
  return {
   pathLength: 1,
   opacity: 1,
   transition: {
    pathLength: { type: 'tween', delay, duration: 1 },
   },
  };
 },
};

const SVG = styled(motion.svg)``;

const RECT = styled(motion.rect)``;

export default function AdviseIcon() {
 return (
  <SVG width='82' height='82' viewBox='0 0 82 82' fill='none' xmlns='http://www.w3.org/2000/svg'>
   <RECT x='-0.000213623' width='82' height='82' rx='15' fill='#F96092' />
   <motion.path
    d='M49.0293 27.8C50.0841 28.4 51.35 28 51.9829 27C52.1939 26.4 52.8268 26 53.6707 26C54.9366 26 55.7805 26.8 55.7805 28C55.7805 29.2 54.9366 30 53.6707 30C52.4049 30 51.561 30.8 51.561 32C51.561 33.2 52.4049 34 53.6707 34C57.2573 34 60 31.4 60 28C60 24.6 57.2573 22 53.6707 22C51.35 22 49.2402 23.2 48.1853 25C47.5524 26 47.9744 27.2 49.0293 27.8ZM58.3122 35.8C58.7341 36.4 58.9451 37.2 58.9451 38C58.9451 40.8 56.6244 43 53.6707 43C50.7171 43 48.3963 40.8 48.3963 38C48.3963 37 48.8183 35.8 49.4512 35C48.8183 34.2 48.3963 33 48.3963 32C48.3963 31.6 48.3963 31.2 48.6073 30.8C45.8646 30 44.1768 27.2 45.0207 24.6V24.4C34.6829 22.4 24.767 28.4 22.4463 38.2C21.1804 43.4 22.6573 49 26.2439 53.2L22.6573 56.6C21.8134 57.4 21.8134 58.6 22.6573 59.4C23.0792 59.8 23.5012 60 24.1341 60H41.0122C51.561 60 60 52 60 42C60 39.8 59.578 37.6 58.7341 35.4C58.5232 35.6 58.5232 35.8 58.3122 35.8ZM51.561 38C51.561 39.2 52.4049 40 53.6707 40C54.9366 40 55.7805 39.2 55.7805 38C55.7805 36.8 54.9366 36 53.6707 36C52.4049 36 51.561 36.8 51.561 38Z'
    fill='white'
   />
  </SVG>
 );
}