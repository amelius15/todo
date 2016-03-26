import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Router, Route, hashHistory} from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { modelReducer, formReducer } from 'react-redux-form';
import reducer from './reducer';
import App from './components/app';
import Page from './pages/mainPage';

const store = createStore(reducer);

const routes = <Route component={App}>
  <Route path="/active" component={Page} />
  <Route path="/completed" component={Page} />
  <Route path="/" component={Page} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);