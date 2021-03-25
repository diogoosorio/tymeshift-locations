import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import ListLocations from './containers/ListLocations';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { Routes } from './constants';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Switch>
        <Route
          path={[Routes.LocationList, Routes.LocationDetail]}
          component={ListLocations}
          exact
        />
        <Route path="/" exact>
          <Redirect to={Routes.LocationList} />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
