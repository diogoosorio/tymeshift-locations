import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#fff',
    },
    text: {
      primary: 'rgba(0, 17, 34, 0.8)',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Lato", "Lucida Grande", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    // used by material-ui on the CssBaseLine component as the default
    // body text style
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.714,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.714,
    },
    h1: {
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.273,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.714,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.778,
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '1rem',
      opacity: 0.3,
      lineHeight: 1.75,
    },
  },
});

export default theme;
