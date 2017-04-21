// React Router Required Objects
// import React from 'react';
// const { Router, Route, hashHistory } = require('react-router');
var React = require('react');
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// react-router-configs here
import App from './App';

module.exports = (
  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
  </Router>
);
