import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #121214;
    /* --primary: #8257e5;
    --primary-darker: #28203e;
    --primary-hover: #9466ff;
    --primary-border: #6833e4;
    --primary-shape: #734bd1; */

    --primary: #2ac7e3;
    --primary-darker: #1c95ab;
    --primary-hover: #1fa8c1;
    --primary-border: #1fa8c1;
    --primary-shape: #1fa8c1;

    --green: #04d361;
    --green-low: #1c2a24;
    --green-darker: #0f3924;

    --yellow: #ffcd1e;

    --gray: #e1e1e6;
    --text: #a8a8b3;
    --support: #737380;

    --shape: #202024;
    --shape-dark: #3c3c42;
    --shape-hover: #29292e;

    --icons: #41414d;
    --attention: #fd951f;
    --borders: #323238;
    --experts: #db3a2c;
    --react: #2ac7e3;
    --node: #8cc84b;
    --elixir: #a32ddf;
    --react-native: #4763ff;
    --flutter: #0389ff;
    --dowhile: #ff248a;
    --black: #09090a;
    --white: #fff
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--background);
    color: var(--text);
  }

  button {
    border: none;
    outline: none;
  }
`
