// React Router Required Objects
const React = require('react');
const router = require("react-router");

const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const App = require('./App');
const Cook = require('./components/cook');
const CookDetails = require('./components/cook/CookDetails');

const Customer = require('./components/customer');
const CookInfo = require('./compnents/customer/CookInfo');
const CustomerDash = require('./components/customer/CustomerDash');
const CustomerFilterPage = require('./components/customer/CustomerFilterPage');


module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="customer" component={Customer} >
        <Route path="dashboard" component={CustomerDash}>

          <Route path="search" component={CustomerFilterPage} />
          <Route path="cookinfo" component={CookInfo} />

          <IndexRoute component={CustomerFilterPage} />
        </Route>

        <Route path="customer-content" component={CustomerContent} />

        <IndexRoute component={CustomerDash} />
      </Route>

      <Route path="cook" component={Cook}>
        <Route path="cook-content" component={CookDetails} />
        <IndexRoute component={CookDetails} />
      </Route>

      <IndexRoute component={Customer} />
    </Route>
  </Router>
);
