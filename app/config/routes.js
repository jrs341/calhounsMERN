import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import HomePage from '../pages/HomePage'
import ContactUs from '../pages/ContactUs'
import Rates from '../pages/Rates'
import Admin from '../pages/Admin'
import UpdateAllMeters from '../Components/Admin/UpdateAllMeters'
import MonthlyBilling from '../Components/Admin/MonthlyBilling'
import CheckinQuestions from '../Components/Admin/CheckinQuestions'
import Checkin from '../Components/Admin/Checkin'
import Checkout from '../Components/Admin/Checkout'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="contactUs" component={ContactUs} />
      <Route path="rates" component={Rates} />
      <Route path="admin" component={Admin} />
        <Route path="checkinQuestions" component={CheckinQuestions}/>
      	<Route path="checkin" component={Checkin} />
      	<Route path="checkout" component={Checkout} />
      	<Route path="updateMeters" component={UpdateAllMeters} />
        <Route path="monthlyBilling" component={MonthlyBilling} />
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);
