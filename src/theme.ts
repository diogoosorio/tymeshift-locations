import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#001122',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: '"Lato", "Lucida Grande", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    // used by material-ui on the CssBaseLine component as the default
    // body text style
    body2: {
      fontSize: '1rem',
      lineHeight: 1.714,
    },
  },
});

export default theme;
