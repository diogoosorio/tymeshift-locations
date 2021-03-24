import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <h1>App</h1>
    </div>
  </ThemeProvider>
);

export default App;
