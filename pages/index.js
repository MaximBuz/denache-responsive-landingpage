import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';

import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';

import Waves from '../components/Waves';
import macbook from '../public/macbook.png';
import hand from "../public/hand-with-phone.png"
import reactLogo from "../public/react-logo.png"
import dockerLogo from "../public/docker-logo.png"
import graphLogo from "../public/graph-logo.png"
import Image from 'next/image';
import Notification from '../components/Notification';

const AboutSection = styled.div`
 margin-top: 100px;
 min-height: 85vh;
 max-height: 85vh;
`;

const AboutWrapper = styled.div`
 position: relative;
 @media (min-width: 64rem) {
  width: 56rem;
  margin: 0 auto;
 }

 /*  @media (min-width: 34rem) {
  margin: 0 1.5rem;
 } */
`;

const AboutHeadingWrapper = styled(motion.div)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
`;

const AboutContent = styled(motion.div)`
  margin-top: 150px;
  display: flex;
  align-items: center;
  gap: 100px;
`

const AboutVisualsWrapper = styled(motion.div)`
  flex: 1 1;
`;

const MacBook = styled(motion.div)`
 
`

const HandWithPhone = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: -80px;
  z-index: 1000;
`

const AboutTextWrapper = styled(motion.div)`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default function Home() {
 return (
  <div>
   <Head>
    <title>Create Next App</title>
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main>
    <NavigationBar />
    <HeroSection />
    <AboutSection>
     <AboutWrapper>
      <AboutHeadingWrapper>
       <h2>Leave the tough stuff to me</h2>
       <p>
        Making sense of new technologies can be a headache. I find the best solutions that fit your business
        best.
       </p>
      </AboutHeadingWrapper>
      <AboutContent>
        <AboutVisualsWrapper>
          <Notification logo={reactLogo} number="1" left={100+110} bottom={180+5}/>
          <Notification logo={dockerLogo} number="4" left={120+110} bottom={120+5}/>
          <Notification logo={graphLogo} number="2" left={140+110} bottom={60+5}/>
          <MacBook>
            <Image alt='macbook' src={macbook} height={350} width={500}></Image>
          </MacBook>
          <HandWithPhone>
            <Image alt='hand with smartphone 3D' src={hand} height={278} width={271}></Image>
          </HandWithPhone>
        </AboutVisualsWrapper>
        <AboutTextWrapper>
          <h3>Smart Consulting</h3>
          <p>Your success is my priority. I take care of providing you with sensible recommendations and make sure that all solutions work for you!</p>
        </AboutTextWrapper>
      </AboutContent>
      <Waves />
     </AboutWrapper>
    </AboutSection>
   </main>

   <footer></footer>
  </div>
 );
}
