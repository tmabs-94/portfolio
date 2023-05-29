import React, { useEffect, useState } from 'react';
// import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import * as DiIcons from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { gettechs } from '../../services/ApiService';

export default function Technologies() {

  const [techs, setTechs] = useState([])

  useEffect(() => {
    let mount = true
    gettechs()
    .then(res => {console.log("res from api", res)
        setTechs(res)
        return() => mount = false
    })
  }, []);

  const tagContent = 'size, 3rem';

  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I've worked with a range of technologies in the web development world. From Back-end To Design</SectionText>
      <List>
        {techs.map((tech) => (
          <ListItem key={tech.tech_id}>
            <img src={tech.icon} width="25rem" height="25rem" />
            {/* <DiIcons.DiReact size="3rem" /> */}
            <ListContainer>
              <ListTitle>{tech.title}</ListTitle>
              <ListParagraph>
                {tech.sub_title} <br />
                {tech.description}
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}  
  

