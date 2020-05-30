const theme = {
  fonts: {
    main: 'Calibre',
    secondary: 'SF Mono',
  },

  fontSizes: {
    100: '12px',
    200: '13px',
    300: '14px',
    500: '16px',
    700: '18px',
    800: '20px',
    900: '22px',
    1000: '32px',
  },

  colors: {
    dark: '#000007',

    navy: {
      050: 'rgba(41, 61, 90, 0.99)',
      060: 'rgba(10, 25, 47, 0.7)',
      070: 'rgba(2, 12, 27, 0.7)',

      400: '#172a45', // lightNavy
      500: '#0a192f', // navy
      600: '#020c1b', // darkNavy
      700: '#01050b', // darkestNavy
    },
    grey: {
      400: '#696a86', // lightGrey
      500: '#4c5772', // grey
      600: '#2d3952', // mediumGrey
      700: '#333f58', // darkGrey
    },
    slate: {
      200: '#ccd6f6', // lighestSlate
      300: '#a8b2d1', // lightSlate
      500: '#8892b0', // slate
    },
    white: {
      200: '#e6f1ff', // white
      400: '#dce7ff', // offWhite
    },
    pink: {
      400: '#ff647f',
    },
    yellow: {
      400: '#ffc464',
    },
    orange: {
      400: '#ff9e64',
    },
    green: {
      050: 'rgba(100, 255, 218, 0.07)', //transGreen
      400: '#64ffda',
    },
    blue: {
      400: '#71afff',
      600: '#1d7ffc',
    },
  },

  borderRadius: '3px',

  gap: {
    20: '20px',
  },

  easing: 'cubic-beizer(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
}

export default theme
