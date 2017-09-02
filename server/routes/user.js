const express  = require('express');
const User     = require('../models/user');
const passport = require('./config/passport');



exports.checkRegister = (req, res, next) => {
  if (req.body.register) {
    console.log('calling register')
    register(req, res);
  } else if (req.body.login) {
    console.log('calling authlocal')
    next();
  }
};

// Register User
const register = (req, res) => {
  const {username, password} = req.body;
  // Validation
  req.checkBody('username', 'Name is required').notEmpty();
  req.checkBody('username', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  // req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  const errors = req.validationErrors();

  if (errors) {
    console.log(errors)
    res.send('/test-error.html\n' + errors)
  } else {
    User.getUserByUsername(username, (err, user) => {
      if (err) throw err;

      if (user) {
        //FIX ME -- Dirty Logging
        res.end(); // that username is already taken
      } else {
        const newUser = new User({ "local.username": username, "local.password": password });

        newUser.save(err => { if (err) throw err; });
        // Take us to main app
        res.redirect('/home#/customer/dashboard');
      }
    });
  }
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/splash.html');
  }
}

exports.login = (req, res) => {
    // res.redirect('/');
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

//Local Authentication
exports.authLocal = passport.authenticate('local', {
    successRedirect: '/home#/customer/dashboard',
    failureRedirect: '/test-error.html',
});

//Google Authentication
exports.authGoogle = passport.authenticate('google', {
  scope: ['profile', 'email']
});

exports.authGoogleCallback = passport.authenticate('google');

exports.continueGoogle = function (req, res) {
  res.redirect('/home#/customer/dashboard');
};
