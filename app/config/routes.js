import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import HomePage from '../pages/HomePage'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);
