import styled from "styled-components";

export const Container = styled.div`
  width: 60px;

  background: rgba(30, 30, 30, 0.5);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  position: fixed;
  bottom: 20px;
  left: 20px;

  z-index: 9999999999;

  opacity: ${(props) => (props.scrollVisible ? 0 : 1)};

  transform: translateY(${(props) => (props.scrollVisible ? "0" : "-30px")});

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
  border: 1px solid rgb(36, 36, 36);

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Links = styled.div`
  width: 100%;
  height: 55px;

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
