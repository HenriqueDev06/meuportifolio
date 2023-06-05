import React from "react";
import { Container, Content, Info, Dest } from "./styles";

import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ title, image, link, desc, subtitle }) => {
  const openNewTab = () => {
    const url = link;
    window.open(url, "_blank");
  };

  return (
    <Container onClick={openNewTab} imageSrc={image}>
      <Dest className="content1">
        <Content className="content1">
          <h1>{title}</h1>
          <p>{desc}</p>
        </Content>
        <Info className="content1">
          <AiOutlineLink title={link} className="icon" />
          <p className="techs">{subtitle}</p>
        </Info>
      </Dest>
    </Container>
  );
};

export default ProjectCard;
