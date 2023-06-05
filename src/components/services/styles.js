import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0);

  flex-direction: column;

  padding-top: 40px;

  h1 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 40px;
    font-weight: 900;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;

  padding: 11px 20px;
  margin: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  background-color: rgb(7, 7, 7);

  border: 1px solid rgb(25, 25, 25);

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  :hover {
    border-color: ${(props) => props.theme.link};
  }

  svg {
    margin: 10px 0;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    z-index: 11;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 20px;
    font-weight: 900;
  }

  p {
    z-index: 11;
    opacity: 0.7;
  }

  @media (max-width: 1200px) {
    min-width: 300px;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: initial !important;
    overflow-x: scroll;
  }
`;
