/***********************************************************
* Dependencies
************************************************************/
const path              = require('path');
const express           = require('express');
const logger            = require('morgan');
const webpack           = require('webpack');
const mongoose          = require('mongoose');
// const configWebpack     = require('./webpack.config.js');
// const webpackMiddleware = require('webpack-dev-middleware');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


/***********************************************************
*  ENVIRONEMENT SETUP
************************************************************/
if (process.env.NODE_ENV === undefined)
    // development env variables
    require('dotenv').config();

const env = process.env.NODE_ENV;


// Database seteup MongoDB--------------------------
(env === 'development')
    ? mongoose.connect(process.env.MONGO_TESTDB)
    : mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// EXPRESS APP INIT
const app = express();
// const compiler = webpack(configWebpack(env));

// Middleware Setup ========================================
app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use("/public", express.static(path.resolve(__dirname + "/public/dist")));
app.use("/", express.static(path.resolve(__dirname + "/public")));
// app.use(webpackMiddleware(compiler));

// Morgan Logger
app.use(logger('dev'));

// Routes ======================

require('./server/routes')(app);
require('./server/api')(app);
//===========


// Main files ==========================================
app.get("/users/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/splash.html'));
});



// Start Server ============================================
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: listening on port ${port}`);
});
