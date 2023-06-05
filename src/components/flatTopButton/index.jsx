import React, { useState, useEffect } from "react";
import { Container } from "./styles";

import { AiOutlineArrowUp } from "react-icons/ai";

const FlatTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let iscro = scrollPosition < 500 ? true : false;

    setVisible(iscro);
  }, [scrollPosition]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container scrollVisible={isVisible} onClick={goToTop}>
      <AiOutlineArrowUp size={"40px"} />
    </Container>
  );
};
export default FlatTopButton;
