// React Router Required Objects
const React   = require('react');
const router  = require("react-router");

const Route   = router.Route;
const Router  = router.Router;
const hashHistory   = router.hashHistory;
const IndexRoute    = router.IndexRoute;

const App       = require('./App');
const Cook      = require('./components/cook');
const CookItem  = require('./components/cook/CookItem');
const CookInfo  = require('./components/customer/CookInfo');

const Customer           = require('./components/customer');
const CustomerDash       = require('./components/customer/CustomerDash');
const CustomerFilterPage = require('./components/customer/CustomerFilterPage');


module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="customer" component={Customer} >

        <Route path="dashboard" component={CustomerDash} />
        <Route path="cookinfo/:cookid" component={CookInfo} />

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