/***********************************************************
* Dependencies
************************************************************/
const path              = require('path');
const express           = require('express');
const logger            = require('morgan');
const bodyParser        = require('body-parser');
const cookieParser      = require('cookie-parser');
const favicon           = require('serve-favicon');
const webpack           = require('webpack');
const mongoose          = require('mongoose');

mongoose.Promise = global.Promise;
// const configWebpack     = require('./webpack.config.js');
// const webpackMiddleware = require('webpack-dev-middleware');

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
  console.error("Mongoose Error: ", err);
});

db.on('disconnected', function() {
  console.warn('MongoDB event disconnected');
});

db.on('reconnected', function() {
  console.log('MongoDB event reconnected');
});

db.once("open", function() {
  console.log(`Mongoose connection successful.\nMongo Host: ${db.host}:${db.port}`);
});


// EXPRESS APP INIT
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(cookieParser());
// const compiler = webpack(configWebpack(env));

// Middleware Setup ========================================
app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use("/public", express.static(path.resolve(__dirname + "/public/dist")));
app.use("/", express.static(path.resolve(__dirname + "/public")));
// app.use(webpackMiddleware(compiler));

// Morgan Logger
if (env === 'development')
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
