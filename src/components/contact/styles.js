import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url("https://orig00.deviantart.net/f5e8/f/2019/046/7/9/brasil_gif_final_by_danc3r10-dcztqsc.gif");

  flex-direction: column;

  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 70px;
    line-height: 45px;
    font-weight: 900;

    margin-top: 40px;
  }

  p {
    z-index: 11;
    opacity: 0.7;
    max-width: 70%;
    text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: rgba(10, 10, 10, 0.7);

  margin-top: 100px;

  padding: 30px 60px;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  border-radius: 7px;
`;

export const LinksContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 22px;
`;

export const Localize = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: salmon;
    z-index: 111;

    margin-right: 10px;
  }
`;

export const Links = styled.div`
  height: 55px;

  margin: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  opacity: 0.7;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;
