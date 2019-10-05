import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Apercu';
  src: url('/static/fonts/apercu/Apercu-Light.eot');
  src: url('/static/fonts/apercu/Apercu-Light.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/apercu/Apercu-Light.woff2') format('woff2'),
    url('/static/fonts/apercu/Apercu-Light.woff') format('woff'),
    url('/static/fonts/apercu/Apercu-Light.ttf') format('truetype'),
    url('/static/fonts/apercu/Apercu-Light.svg#Apercu-Light') format('svg');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Apercu';
  src: url('/static/fonts/apercu/Apercu-Regular.eot');
  src: url('/static/fonts/apercu/Apercu-Regular.eot?#iefix')
      format('embedded-opentype'),
    url('/static/fonts/apercu/Apercu-Regular.woff2') format('woff2'),
    url('/static/fonts/apercu/Apercu-Regular.woff') format('woff'),
    url('/static/fonts/apercu/Apercu-Regular.ttf') format('truetype'),
    url('/static/fonts/apercu/Apercu-Regular.svg#Apercu-Regular') format('svg');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Apercu';
  src: url('./static/fonts/apercu/Apercu-Medium.eot');
  src: url('./static/fonts/apercu/Apercu-Medium.eot?#iefix')
      format('embedded-opentype'),
    url('./static/fonts/apercu/Apercu-Medium.woff2') format('woff2'),
    url('./static/fonts/apercu/Apercu-Medium.woff') format('woff'),
    url('./static/fonts/apercu/Apercu-Medium.ttf') format('truetype'),
    url('./static/fonts/apercu/Apercu-Medium.svg#Apercu-Medium') format('svg');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Apercu';
  src: url('./static/fonts/apercu/Apercu-Bold.eot');
  src: url('./static/fonts/apercu/Apercu-Bold.eot?#iefix') format('embedded-opentype'),
    url('./static/fonts/apercu/Apercu-Bold.woff2') format('woff2'),
    url('./static/fonts/apercu/Apercu-Bold.woff') format('woff'),
    url('./static/fonts/apercu/Apercu-Bold.ttf') format('truetype'),
    url('./static/fonts/apercu/Apercu-Bold.svg#Apercu-Bold') format('svg');
  font-weight: 700;
  font-style: normal;
}

html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #fcfeff;
  font-family: 'Apercu', 'Source Sans Pro', system, system-ui, -apple-system,
    Roboto, Helvectica, Arial, sans-serif;
  color: #4c4c4c;
}
`;
