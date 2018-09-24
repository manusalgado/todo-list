import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import App from './components/App';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const store = createStore(
  rootReducers,
  applyMiddleware(createLogger(), thunk)
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));