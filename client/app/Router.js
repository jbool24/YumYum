// React Router Required Objects
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// react-router-configs here
import App from './App';

export default (
  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/users" component={App}>

      {/* If sub-routes to components */}


      {/* <IndexRoute component={App} /> */}

    </Route>
  </Router>
);
