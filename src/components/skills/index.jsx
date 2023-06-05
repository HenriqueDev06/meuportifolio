import React from "react";
import { Container, BackgroundFade, Content, SkillList } from "./styles";

import {
  DiJavascript1,
  DiReact,
  DiTypo3,
  DiMongodb,
  DiUikit,
  DiMaterializecss,
  DiVisualstudio,
  DiGithubFull,
  DiCss3Full,
  DiFirebase,
  DiHtml5,
  DiPostgresql,
  DiMysql,
  DiIllustrator,
  DiAws,
} from "react-icons/di";

const Skills = () => {
  return (
    <Container>
      <BackgroundFade />
      <h1>Habilidades</h1>
      <p>Algumas da tecnologias e Linguagens que eu uso!</p>
      <Content>
        <SkillList>
          <DiJavascript1 size={"90px"} />
          <DiReact size={"90px"} />
          <DiTypo3 size={"90px"} />
          <DiMongodb size={"90px"} />
          <DiUikit size={"90px"} />
          <DiMaterializecss size={"90px"} />
          <DiGithubFull size={"90px"} />
          <DiVisualstudio size={"90px"} />
          <DiCss3Full size={"90px"} />
        </SkillList>
        <SkillList>
          <DiFirebase size={"90px"} />
          <DiHtml5 size={"90px"} />
          <DiPostgresql size={"90px"} />
          <DiMysql size={"90px"} />
          <DiIllustrator size={"90px"} />
          <DiAws size={"90px"} />
        </SkillList>
      </Content>
    </Container>
  );
};

export default Skills;
