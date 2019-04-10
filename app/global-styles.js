import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  button {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    margin: 0;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1;
    padding-bottom: 15px;
    // font-weight: normal;
  }
`;

export default GlobalStyle;
