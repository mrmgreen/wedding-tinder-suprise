import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import MainContainer from './containers/MainContainer';
import rootReducer from './reducers';

require('./index.css');

const logger = createLogger();
let defaultMiddleware = [thunkMiddleware, promiseMiddleware, logger];
const store = createStore(
  rootReducer,
  applyMiddleware(...defaultMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} />
      <Route path="/:name" component={MainContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
