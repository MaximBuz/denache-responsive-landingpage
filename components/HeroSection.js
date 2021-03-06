import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import ContactButton from '../components/ContactButton';

import hand from '../public/hand-1.png';
import Ellipse from './illustrations/Ellipse';

const Section = styled.section`
 display: flex;
 align-items: center;
 min-height: 85vh;
 max-height: 85vh;

 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }

 @media (min-width: 34rem) {
  margin: 0 auto;
 }

 @media (min-width: 320px) and (max-width: 480px) {
  flex-direction: column;
  margin-top: 100px;
  min-height: 80vh;
 }  

 @media (min-width: 481px) and (max-width: 1024px) {
  flex-direction: column;
  min-height: 80vh;
  margin: 0 1rem 200px 1rem;
 }

`;

const HeroTextWrapper = styled(motion.div)`
 flex: 1 1;
 display: flex;
 flex-direction: column;
 align-items: left;
 justify-content: flex-start;
 gap: 20px;

 @media (min-width: 320px) and (max-width: 1024px) {
  align-items: center;
  margin-top: 20px;
 }  
`;

/* Animation */
const HeroTextWrapperVariants = {
 hidden: { opacity: 0, x: -100, rotate: 20 },
 show: {
  opacity: 1,
  x: 0,
  rotate: 0,
  transition: {
   delay: 0.3,
   staggerChildren: 10,
  },
 },
};

/* Animation */
const HeroTextItem = {
 hidden: { opacity: 0, x: -100 },
 show: { opacity: 1, x: 0, transition: { delay: 0.4 } },
};

const HeroImageWrapper = styled(motion.div)`
 margin-left: -50px;
 @media (min-width: 320px) and (max-width: 480px) {
  margin-left: 100px;
 }  

  @media (min-width: 481px) and (max-width: 1024px) {
    margin-left: -150px;
 }
`;

const HandImageWrapper = styled(motion.div)`
 float: right;
 @media (min-width: 320px) and (max-width: 480px) {
  img {
    transform: scale(0.8);
  }
 }  
`;

const EllipseSVG = styled(motion.svg)`
 position: relative;
 top: 65px;
 left: 140px;
 z-index: -10;

 @media (min-width: 320px) and (max-width: 480px) {
  position: absolute;
  top: 70vh;
  left: 50px;
  width: 250px;
  height: 250px;
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  top: 5vh;
  left: 171px;
 }
`;

/* Animation */
const HandImageWrapperVariants = {
 hidden: { opacity: 0, x: -100 },
 show: { opacity: 1, x: 0, transition: { delay: 0.4 } },
};

export default function HeroSection({windowDimension}) {
 return (
  <Section>
   <HeroTextWrapper variants={windowDimension >= 480 ? HeroTextWrapperVariants : null} initial='hidden' animate='show'>
    <motion.h1 variants={windowDimension >= 480 ? HeroTextItem : null}>Smart, creative development.</motion.h1>
    <motion.p>
     No techie? No problem. I provide creative and professional software development for your business vision.
    </motion.p>
    <ContactButton variants={windowDimension >= 480 ? HeroTextItem : null} text="Let's collaborate!" url={'Contact'} size='15px 35px' float='left' />
   </HeroTextWrapper>
   <HeroImageWrapper>
    <HandImageWrapper variants={windowDimension >= 480 ? HandImageWrapperVariants : null} initial='hidden' animate='show'>
     <Ellipse color="#8E8CED" SVG={EllipseSVG} />
     <Image alt='3D-Hand' src={hand} height={400} width={260}></Image>
    </HandImageWrapper>
   </HeroImageWrapper>
  </Section>
 );
}
