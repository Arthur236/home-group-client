import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import configureStore from './redux/store';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        {routes}
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);
