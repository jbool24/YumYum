// React Router Required Objects
const React = require('react');
const router = require("react-router");

const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const App = require('./App');
const Cook = require('./components/cook');
const Customer = require('./components/customer');
const FilterPage = require('./components/customer/customerFilterPage');
const MenuItems = require('./components/common/menuItem');




module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

            <Route path="cook" component={Cook}>
              <Route path="cook-content" component={MenuItems} />
              <IndexRoute component={MenuItems} />
            </Route>

            <Route path="customer" component={Customer}>
              <Route path="customer-content" component={MenuItems} />
              <Route path="customer-dash" component={FilterPage} />
              <IndexRoute component={FilterPage} />
            </Route>

        {/* This is only for Demo  */}
        <IndexRoute component={Customer} />
    </Route>
  </Router>
);
