import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';
import Page from './pages/mainPage';

const store = createStore(reducer);

const routes = (<Route component={App}>
  <Route path="/active" component={Page} />
  <Route path="/completed" component={Page} />
  <Route path="/" component={Page} />
</Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
