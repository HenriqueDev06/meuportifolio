import React from "react";
import { Container, Background, BackgroundFade, Content } from "./styles";

const backgroundLink =
  "https://cdn2.unrealengine.com/Unreal+Engine%2Fdeveloper-interviews%2Fdeveloper-eggnut-highlights-how-they-created-backbone-s-dystopian-noir-2-5d-pixel-art-style%2FFB_EggNut_Backbone_Interview-1200x630-aed8f94ab90306fe6a4ecad0ebfc8ca519c926dc.jpg";

const Header = () => {
  return (
    <Container>
      <BackgroundFade />
      <Background src={backgroundLink} />
      <Content>
        <span>Bem vindo 👋, Eu sou</span>
        <h1>Johan Henrique</h1>
        <span className="up">Designer + Developer</span>
      </Content>
    </Container>
  );
};

export default Header;
