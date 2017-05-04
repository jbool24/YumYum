const express = require('express');

const User = require('../models/user');
const passport = require('./config/passport');




exports.checkRegister = function (req, res, next) {
  console.log(req.body);
  if (req.body.register) {
    register(req, res)
  } else if(req.body.login) {
    next();
  }
}
// Register User
const register = function register(req, res) {
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
  }

  else {
    User.getUserByUsername(username, function (err, user) {
      console.log(user);
      if (err) throw err;
      if (user) {
        return console.log('that username is already taken');
      } else {
        const newUser = new User({
          "local.username": username,
          "local.password": password
        });
        newUser.save(function (err) {
          if (err) throw err
        })

        //     req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/home#/customer/customer-dashboard/filter-search');
      }
    });
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

//Local Authentication
exports.authLocal = passport.authenticate('local',
  {
    successRedirect: '/home#/customer/customer-dashboard/filter-search',
    failureRedirect: '/error.html',
    failureFlash: true })

//Google Authentication
exports.authGoogle = passport.authenticate('google',
  { scope: ['profile', 'email'] });

exports.authGoogleCallback = passport.authenticate('google')

exports.continueGoogle = function (req, res) {
  res.redirect('/home#/customer/customer-dashboard/filter-search')
}
