import styled from "styled-components";

export const Buttons = styled.div`
  height: 95px;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavButton = styled.button`
  /* height: 45px; */

  background: transparent;
  margin: 0px 10px;

  padding: 4px 0px;
  cursor: pointer;

  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  border-bottom: 1px solid transparent;

  :hover {
    border-bottom-color: white;
    letter-spacing: 1px;
  }
`;

export const Logo = styled.img`
  width: 95px;
  height: 95px;

  object-fit: contain;
`;

export const Container = styled.div`
  width: 100%;
  height: 95px;

  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 20px;

  position: absolute;
  top: 0;

  z-index: 11;

  @media (max-width: 668px) {
    ${Logo} {
      display: none;
    }

    ${Buttons} {
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
