import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, reduxImutableStateInvariant())),
  );
}
