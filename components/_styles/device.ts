// in px.
const size = {
  extraLarge: 1200 / 16,
  large: 992 / 16,
  medium: 768 / 16,
  small: 576 / 16,
  extraSmall: 576 / 16
};

export const device = {
  extraSmall: `(max-width: ${size.extraSmall}em)`,
  small: `(max-width: ${size.small}em)`,
  medium: `(max-width: ${size.medium}em)`,
  large: `(max-width: ${size.large}em)`,
  extraLarge: `(max-width: ${size.extraLarge}em)`
};

export default device;
