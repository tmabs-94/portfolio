import React, { useState, useEffect } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { getaccomplishments } from '../../services/ApiService';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

export default function Acomplishments() {

  const [accomplishments, setAccomplishments] = useState([])

  useEffect(() => {
    let mount = true
    getaccomplishments()
    .then(res => {console.log("res from api", res)
        setAccomplishments(res)
        return() => mount = false
    })
  }, []);

  return(
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {accomplishments.map(accomplishment => (
          <Box key={accomplishment.accomplishment_id}>
            <BoxNum>{accomplishment.quantity}+</BoxNum>
            <BoxText>{accomplishment.title}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );

}
