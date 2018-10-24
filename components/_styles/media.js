import { css } from 'styled-components';

// in px.
const sizes = {
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576,
  extraSmall: 576,
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
