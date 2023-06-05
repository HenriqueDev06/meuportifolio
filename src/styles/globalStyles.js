import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-family: 'Poppins';
        color: ${(props) => props.theme.text};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;
    }
    html, body{
        background: ${(props) => props.theme.background};
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
        color: ${(props) => props.theme.link}
    }
    .display-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.main};
}

`;
