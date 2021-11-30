import React from "react";

import {
  Section,
  // SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 30, text: "Projects" },
  { number: 120, text: "LinkedIn Connections" },
  { number: 150, text: "Commits this year" },
  { number: 1, text: "Internships" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider /> */}
  </Section>
);

export default Acomplishments;
