/***********************************************************
 * Dependencies
 ************************************************************/
const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const favicon = require("serve-favicon");
const webpack = require("webpack");
const mongoose = require("mongoose");
// const expressValidator = require("express-validator");
// const flash             = require('connect-flash');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo")(session);

mongoose.Promise = global.Promise;

/***********************************************************
 *** ENVIRONEMENT SETUP ************************************
 ************************************************************/
if (process.env.NODE_ENV === undefined)
  // development env variables
  require("dotenv").config();

const env = process.env.NODE_ENV;

//==========================================================
//=== Database seteup MongoDB ==============================
//==========================================================
const db = mongoose.connection;

db.on("error", function(err) {
  console.error("Mongoose Error: ", err);
});

db.on("disconnected", function() {
  console.warn("MongoDB event disconnected");
});

db.on("reconnected", function() {
  console.log("MongoDB event reconnected");
});

db.once("open", function() {
  console.log(
    `Mongoose connection successful.\nMongo Host: ${db.host}:${db.port}`
  );
});

env === "development"
  ? mongoose.connect(process.env.MONGO_TESTDB)
  : mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/yum_db",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

//==========================================================
//=== EXPRESS APP INIT =====================================
//==========================================================
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use(cookieParser());

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({ mongooseConnection: db }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//Makes request information available on all pages
app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

//==========================================================
//=== Middleware Setup =====================================
//==========================================================
app.use("/", express.static(path.resolve(__dirname + "/public")));

// Express Validator
// app.use(
//   expressValidator({
//     errorFormatter: (param, msg, value) => {
//       const namespace = param.split(".");
//       const root = namespace.shift();
//       let formParam = root;
//
//       while (namespace.length) {
//         formParam += "[" + namespace.shift() + "]";
//       }
//       return {
//         param: formParam,
//         msg: msg,
//         value: value
//       };
//     }
//   })
// );

//---Connect Flash--------------------------------------
// app.use(flash());

// Global Variables for Flash
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

// Morgan Logger =========================================
if (env === "development") app.use(logger("dev"));

// Routes ================================================
require("./server/routes")(app);
require("./server/api")(app);

// Main files =============================================
const { isAuthenticated } = require("./server/routes/user");
app.get("/home/", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/splash.html"));
});

// Start Server ============================================
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server Started: listening on port ${port}`);
});
