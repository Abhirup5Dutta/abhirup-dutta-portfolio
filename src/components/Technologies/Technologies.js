import React from 'react';
import { DiReact } from 'react-icons/di';
import { SiAdobephotoshop } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked in a wide range of technologies from frontend development, webpage designing to backend. My major tech stack is MERN stack and I have also worked in mobile application development using Flutter, besides that I have also worked with firebase.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobephotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Graphics Designing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe Photoshop and Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
