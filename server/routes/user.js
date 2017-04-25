const express = require('express');

const User = require('../models/user');
const passport = require('./config/passport');

// Register User
exports.register = function (req, res) {
  var {username, password} = req.body;

  console.log(req.body);

//   // Validation
//   req.checkBody('name', 'Name is required').notEmpty();
//   req.checkBody('email', 'Email is required').notEmpty();
//   req.checkBody('email', 'Email is not valid').isEmail();
//   req.checkBody('username', 'Username is required').notEmpty();
//   req.checkBody('password', 'Password is required').notEmpty();
//   req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    res.send('/error.html')
  } else {
    const newUser = new User({
      "local.username": username,
      "local.password": password
    });
    console.log(newUser);
    newUser.save(function (err) {
      if (err) throw err
    })

//     req.flash('success_msg', 'You are registered and can now login');

    res.redirect('/test-login.html');
  }
};

exports.login = function (req, res) {
    // res.redirect('/');
};

exports.logout = function (req, res) {
  req.logout();
  // req.flash('success_msg', 'You are logged out');
  res.redirect('/');
};

exports.authLocal = passport.authenticate('local',
  { successRedirect: '/users',
    failureRedirect: '/error.html',
    failureFlash: true })

exports.authGoogle = passport.authenticate('google',
  { scope: ['profile', 'email'] });

exports.authGoogleCallback = passport.authenticate('google',
  { successRedirect: '/users',
    failureRedirect: '/error.html'});
