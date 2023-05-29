import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { getprojects } from '../../services/ApiService';



export default function AllProjects() {

const [projects, setProjects] = useState([])

useEffect(() => {
  let mount = true
  getprojects()
  .then(res => {console.log("res from api", res)
      setProjects(res)
      return() => mount = false
  })
}, []);

// const limitData = projects.slice(0, 6);

  return (
    <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(project => (
        <BlogCard key={project.project_id}>
          <Img src={project.img} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.slacks.map((tag) => (
                <Tag key={tag.slack_id}>{tag.title}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.code_link}>Code</ExternalLinks>
            <ExternalLinks href={project.source_link}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  )
}
