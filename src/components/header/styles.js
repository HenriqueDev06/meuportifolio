import styled from "styled-components";

export const Background = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const BackgroundFade = styled.div`
  height: 100vh;
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));

  position: absolute;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-size: 80px;
    line-height: 75px;
    font-weight: 900;
    text-align: center;
  }

  .up {
    color: ${(props) => props.theme.main};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 440px) {
    h1 {
      font-size: 60px;
      line-height: 75px;
      font-weight: 900;
      text-align: center;
    }
  }
`;
