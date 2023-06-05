import styled from "styled-components";

export const Container = styled.div`
  width: 70px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 99999999999;

  bottom: 80px;
  right: 50px;

  border-radius: 50%;

  opacity: ${(props) => (props.scrollVisible ? 0 : 1)};

  transform: translateY(${(props) => (props.scrollVisible ? "0" : "20px")});
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  background-color: rgba(20, 20, 20, 0.6);

  border: 1px solid rgb(36, 36, 36);

  :hover {
    border-radius: 30%;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 50px;
    height: 50px;

    bottom: 50px;
    right: 30px;

    svg {
      width: 30px !important;
      height: 30px !important;
    }
  }
`;
