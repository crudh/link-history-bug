
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Router } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import { createHistory } from 'history';
import dummyReducer from './reducer';
import IndexView from './indexview';

const rootReducer = combineReducers({
  dummy: dummyReducer,
  routing: routeReducer
});

const history = createHistory();
const store = createStore(rootReducer);

syncReduxAndRouter(history, store);

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <Router history={history}>
        <Route path='/' component={IndexView}/>
        <Route path='/dummy/:id' component={IndexView}/>
    </Router>
  </Provider>,
  rootElement
);
