/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import App from './Components/App';
import User from './Components/User';
import TweetsContainer from './Components/TweetsContainer';

import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={TweetsContainer}></IndexRoute>
        <Route path="/users/:userId" component={User}></Route>
      </Route>
    </Router>
  </Provider>
);


render(router, document.getElementById('root'));
