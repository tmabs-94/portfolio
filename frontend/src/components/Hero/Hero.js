import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to Babatunde<br />
        Mabinuori Portfolio
      </SectionTitle>
      <SectionText>
      As a software engineer, I am passionate about creating elegant solutions to complex problems. With a strong background in programming and a keen eye for detail, I am dedicated to delivering high-quality software products that exceed customer expectations. Whether working independently or as part of a team, I thrive on collaborating with colleagues and stakeholders to achieve project goals and drive innovation. My commitment to staying up-to-date with emerging technologies and industry trends allows me to consistently deliver cutting-edge solutions that help businesses succeed in today's fast-paced digital landscape.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;