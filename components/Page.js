import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import global from "../styles/global.scss";
// import "../styles/index.scss";
import { useRouter } from "next/router";
import Nav from "./nav";
import MenuNav from "../components/MenuNav";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const theme = {
  fontNanum: "Nanum Gothic, sans-serif",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  maxWidth: "1400px",
  red: "#FF0000",
  lightRed: "#EC1F23",
  black: "#393939",
  lightBlue: "#377FA9",
  // grey: '#3A3A3A',
  orange: "#e4ad25",
  darkOrange: "#E7600C",
  grey: "#999999",
  grey2: "#9E9E9E",
  lightGrey: "#E1E1E1",
  lightGrey2: "#EEEDEA",
  offWhite: "#EDEDED",
  primary: "#007bff",
  dark: "#343a40",
  dark2: "#24292E",
  light: "#f4f4f4",
  white: "#ffffff",
  oldLace: "rgb(253, 245, 230)",
  beige: "rgb(245, 245, 220)",
  papayaWhip: "rgb(255, 239, 213)",
  lightBlue: "#0095ff",
  blue: "#006699",
  darkBlue: "#1c2e4a",
  darkBlue2: "#39739d",
  navBlue: "#3c8dbc",
  navBlue2: "#367fa9",
  danger: "#dc3545",
  lightGreen: "#26a69a",
  success: "#28a745",
  warning: "#ffc107",
  info: "#17a2b8",
  secondary: "#6c757d",
  yellow: "#ffe866",
  pink: "#cf3472",
  sidebar: "#222d32"
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    background: transparent;
  }

  body {
    margin: 0;
    padding: 0;
     /* font-size: 1.6rem;
     line-height: 2; */
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
  }

  a,
  a:focus,
  a:link,
  a:active,
  a:visited {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    color: #333;
    outline: 0;
    border: 0;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  @media (max-width: 540px) and (orientation: portrait) {
    h1 {
      font-size: 6.3vw;
    }
    h2 {
      font-size: 5.5vw;
    }
    h3 {
      font-size: 5vw;
    }
    h4 {
      font-size: 4.4vw;
    }
    h5 {
      font-size: 3.8vw;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  position: relative;
`;

const Main = styled.div`
  width: calc(100% - 260px);
  background: #eeedea;
  position: fixed;
  left: 260px;
  height: 100%;
  overflow-y: auto;
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Nav />
        <Main>{props.children}</Main>
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Page;
