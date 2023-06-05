import styled from "styled-components";

export const Container = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  height: 400px;
  width: 360px;

  margin: 0px 20px;

  background: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;

  .content1 {
    opacity: 0;

    z-index: 999;
  }

  :hover {
    .content1 {
      opacity: 1;
      transform: scale(1);
    }

    .fade {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));
    }

    cursor: pointer;
  }

  @media (max-width: 440px) {
    min-width: 360px;
    .content1 {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Info = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 360px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row-reverse;

  padding: 5px 10px;
  padding-top: 25px;

  .icon {
    margin-right: 5px;

    :hover {
      fill: ${(props) => props.theme.link};
    }
  }

  .techs {
    font-size: 10px;
  }

  padding-left: 10px;
  padding-right: 10px;
`;

export const Content = styled.div`
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  width: 360px;

  margin: 0px 20px;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 50px;
  }

  p {
    text-align: center;
  }
`;

export const Dest = styled.div`
  height: 400px;
  width: 360px;

  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;

  opacity: 0.3;
  transition: 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  padding: 10px;
`;
