import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import HomePage from '../pages/HomePage'
import ContactUs from '../pages/ContactUs'
import Admin from '../pages/Admin'
import UpdateMeters from '../Components/Admin/UpdateMeters'
import UpdateAllMeters from '../Components/Admin/UpdateAllMeters'
import UpdateSelectMeters from '../Components/Admin/UpdateSelectMeters'
import Checkin from '../Components/Admin/Checkin'
import Checkout from '../Components/Admin/Checkout'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="contactUs" component={ContactUs} />
      <Route path="admin" component={Admin} />
      	<Route path="checkin" component={Checkin} />
      	<Route path="checkout" component={Checkout} />
      	<Route path="updateMeters" component={UpdateMeters} />
      		<Route path="updateAllMeters" component={UpdateAllMeters} />
      		<Route path="updateSelectMeters" component={UpdateSelectMeters} />
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);
