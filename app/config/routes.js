import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AddUser from '../Components/Admin/AddUser'
import Login from '../pages/Login'
import Main from '../pages/Main'
import HomePage from '../pages/HomePage'
import ContactUs from '../pages/ContactUs'
import Development from '../pages/Development'
import Rates from '../pages/Rates'
import Admin from '../pages/Admin'
import UpdateAllMeters from '../Components/Admin/UpdateAllMeters'
import MonthlyBilling from '../Components/Admin/MonthlyBilling'
import CheckinQuestions from '../Components/Admin/CheckinQuestions'
import Reservations from '../pages/Reservations'
import Checkin from '../Components/Admin/Checkin'
import CheckinConfirm from '../pages/CheckinConfirm'
import Checkout from '../Components/Admin/Checkout'
import CheckoutConfirm from '../pages/CheckoutConfirm'
import Payment from '../pages/Payment'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="login" component={Login} />
      <Route path="contactUs" component={ContactUs} />
      <Route path="rates" component={Rates} />
      <Route path="reservations" component={Reservations}/>
      <Route path="development" component={Development} />
      <Route path="admin" component={Admin} />
        <Route path="addUser" component={AddUser} />
        <Route path="checkinQuestions" component={CheckinQuestions}/>
      	<Route path="checkin" component={Checkin} />
        <Route path="checkinConfirm" component={CheckinConfirm} />
      	<Route path="checkout" component={Checkout} />
        <Route path="checkoutConfirm" component={CheckoutConfirm} />
        {/*<Route path="payment" component={Payment} />*/}
      	<Route path="updateMeters" component={UpdateAllMeters} />
        <Route path="monthlyBilling" component={MonthlyBilling} />
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);
