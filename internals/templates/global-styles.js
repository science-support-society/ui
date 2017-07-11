import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto, sans-serif';
  }

  body.fontLoaded {
    font-family: 'Roboto, sans-serif';
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  .icon.light { color: rgba(255, 255, 255, 1); }
  .icon.inactive { color: rgba(255, 255, 255, 0.3); }
`;
