import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Routes from "./route";
import GlobalStyles from "./styles/globalStyles";

import Themes from "./themes";

const Root = () => {
  return (
    <ThemeProvider theme={Themes[0]}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
