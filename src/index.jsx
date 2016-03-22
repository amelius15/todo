import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {Router, Route, hashHistory} from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { modelReducer, formReducer } from 'react-redux-form';
import reducer from './reducer';
import App from './components/app';
import AllPage from './pages/all';
import ActivePage from './pages/active';
import CompletedPage from './pages/completed';

const items = [{id: 0, done: true, text:"Entry 1"},{id: 1, done: false, text:"Screw this"}, {id: 2, done: true, text: "ayyy lmao"}];
console.log("list", items);
const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    items: List.of(items)
  }
});

const routes = <Route component={App}>
  <Route path="/active" component={ActivePage} />
  <Route path="/completed" component={CompletedPage} />
  <Route path="/" component={AllPage} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);