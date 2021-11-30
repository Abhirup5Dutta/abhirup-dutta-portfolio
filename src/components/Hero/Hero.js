import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const prefix = "/abhirup-dutta-portfolio";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There <br />I am Abhirup Dutta, providing development services
      </SectionTitle>
      <SectionText>
        I am a MERN stack developer, passionate about frontend development. I
        have made many projects in ReactJS and Flutter. If you are trying to
        find solutions to frontend problems for your brand, I am the person to
        go to. Feel free to connect.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = `https://drive.google.com/file/d/15NifuND3XaXSF2EOYiqDFJ1hCazgisOs/view?usp=sharing`)
        }
      >
        My CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
