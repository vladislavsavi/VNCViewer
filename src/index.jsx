import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Wrapper } from '@components';
import '@asts/styles/insex.scss';
import { RoutList } from './RoutList';
import { RootReducer } from './Store/RootReducer';
import { connectDB } from './Store/actions/DBActions';

const loggerMiddleware = createLogger();

const store = createStore(
  RootReducer,
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);

store.dispatch(connectDB());

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <RoutList />
    </Wrapper>
  </Provider>
  , document.getElementById('root'));
