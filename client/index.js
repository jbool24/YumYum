import React from 'react';
import ReactDOM from 'react-dom';

//import Router from './app/Router';

var routes = require('./app/Router');

import App from './app/App';

ReactDOM.render(routes, document.getElementById('app-target'));
