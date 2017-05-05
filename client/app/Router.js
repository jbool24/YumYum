// React Router Required Objects
const React = require('react');
const router = require("react-router");

const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const App = require('./App');
const Cook = require('./components/cook');
const CookItem = require('./components/cook/CookItem');

const Customer = require('./components/customer');
const CustomerDash = require('./components/customer/CustomerDash');
const CustomerContent = require('./components/customer/CustomerContent');
const CustomerFilterPage = require('./components/customer/CustomerFilterPage');

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="customer" component={Customer} >
        <Route path="dashboard" component={CustomerDash}>

          <Route path="search" component={CustomerFilterPage} />
          {/*<Route path="cookinfo" component={CookInfo} />*/}

          <IndexRoute component={CustomerFilterPage} />
        </Route>

        <Route path="customer-content" component={CustomerContent} />

        <IndexRoute component={CustomerDash} />
      </Route>

      <Route path="cook" component={Cook}>
        <Route path="cook-content" component={CookItem} />
        <IndexRoute component={CookItem} />
      </Route>

      <IndexRoute component={Customer} />
    </Route>
  </Router>
);
