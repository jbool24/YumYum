// React Router Required Objects
const React = require('react');
const router = require("react-router");
const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

const App = require('./App');
const Cook = require('./component/cook');
const Customer = require('./component/customer');

module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

            <Route path="cook" component={Cook}></Route>
            <Route path="customer" component={Customer}></Route>

    </Route>
  </Router>
);
