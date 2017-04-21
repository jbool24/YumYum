// React Router Required Objects
const React = require('react');
const router = require("react-router");
const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

import App from './App';

module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);
