import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import routes from './routes';
import configureStore from './redux/store';
import GlobalStyles from './globalStyles';
import theme from './theme';

import setAuthentication from './utils/setAuthentication';

import './index.css';

const store = configureStore();

setAuthentication();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routes}
        </ThemeProvider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
