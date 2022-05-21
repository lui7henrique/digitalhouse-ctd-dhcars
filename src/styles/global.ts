import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
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
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  p, a {
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.principal};
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
