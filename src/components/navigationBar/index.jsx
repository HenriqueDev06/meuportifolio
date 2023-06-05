import React from "react";
import { Container, Buttons, Logo, NavButton } from "./styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const logoLink =
  "https://res.cloudinary.com/dmceve2cp/image/upload/v1685980563/ecomerce/8b03729d32eb11f04c8ea23545a53fcd_aoe21f.png";

const NavigationBar = () => {
  const { height, width } = useWindowDimensions();

  const goToPosition = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Logo src={logoLink} />
      <Buttons>
        <NavButton onClick={() => goToPosition(0)}>Inicio</NavButton>
        <NavButton onClick={() => goToPosition(height + 100)}>
          Projetos
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 2 + 200)}>
          Habilidades
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 3 + 200)}>
          Serviços
        </NavButton>
        <NavButton onClick={() => goToPosition(height * 4 + 200)}>
          Contato
        </NavButton>
      </Buttons>
    </Container>
  );
};

export default NavigationBar;
