import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#fff',
    },
    text: {
      primary: '#001122',
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
    h1: {
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.273,
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
