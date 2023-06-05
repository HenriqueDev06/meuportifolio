import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background: url("https://i.pinimg.com/originals/f5/81/ed/f581ed2cb2711454b0b62acf93004c6e.png");

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 55px;
    font-weight: 900;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    text-align: center;
    max-width: 80%;
  }
`;

export const BackgroundFade = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));

  position: absolute;
`;

export const Content = styled.div`
  width: 100%;
  overflow-y: hidden;

  z-index: 11;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  @media (max-width: 1200px) {
    justify-content: initial !important;
    overflow-x: scroll;
  }
`;
