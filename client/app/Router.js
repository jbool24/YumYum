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
const CustomerDash = require('./components/customer/CustomerDash');
const CustomerFilterPage = require('./components/customer/CustomerFilterPage')
const MenuItems = require('./components/common/menuItem');




module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

            <Route path="cook" component={Cook}>
              <Route path="cook-content" component={CookDetails} />
              <IndexRoute component={CookDetails} />
            </Route>

            <Route path="customer" component={Customer}>
              <Route path="customer-content" component={CustomerContent} />

              <Route path="customer-dash" component={CustomerDash}>
                <Route path="FilterSearch" component={CustomerFilterPage} />
                <Route path="FilterResults" component={CookDetails} />
              </Route>

              <IndexRoute component={CustomerDash} />
            </Route>

        {/* This is only for Demo  */}
        <IndexRoute component={Customer} />
    </Route>
  </Router>
);
