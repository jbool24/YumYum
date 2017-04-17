/***********************************************************
* Dependencies
************************************************************/
const path              = require('path');
const express           = require('express');
const logger            = require('morgan');
const webpack           = require('webpack');
const configWebpack     = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');


/***********************************************************
*  ENVIRONEMENT SETUP
************************************************************/
if (process.env.NODE_ENV === undefined)
    // development env variables
    require('dotenv').config();

const env = process.env.NODE_ENV;
// End Setup ===============================================

const app = express();
const compiler = webpack(configWebpack(env));


// Middleware Setup ========================================
//app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));


// Main file ==========================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/splash.html'));
});

app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Start Server ============================================
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: listening on port ${port}`);
});
