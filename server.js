/***********************************************************
* Dependencies
************************************************************/
const path              = require('path');
const express           = require('express');
const logger            = require('morgan');
const webpack           = require('webpack');
const mongoose          = require('mongoose');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const expressValidator  = require('express-validator');
const flash             = require('connect-flash');
const session           = require('express-session');
const passport          = require('passport');
const LocalStrategy     = require('passport-local');

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
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// EXPRESS APP INIT
const app = express();

// const compiler = webpack(configWebpack(env));

// Middleware Setup ========================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/public", express.static(path.resolve(__dirname + "/public")));
// app.use(webpackMiddleware(compiler));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
 
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Connect Flash
app.use(flash());

// Global Variables for Flash
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

require('./server/routes/index')(app)

// Morgan Logger
app.use(logger('dev'));


// Main files ==========================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/splash.html'));
});

app.get("/users/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});


// Start Server ============================================
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: listening on port ${port}`);
});
