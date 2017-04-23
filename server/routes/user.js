const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

// Register User
exports.register = function (req, res) {
  console.log(req.body);
  var {username, password} = req.body;
  

//   // Validation
//   req.checkBody('name', 'Name is required').notEmpty();
//   req.checkBody('email', 'Email is required').notEmpty();
//   req.checkBody('email', 'Email is not valid').isEmail();
//   req.checkBody('username', 'Username is required').notEmpty();
//   req.checkBody('password', 'Password is required').notEmpty();
//   req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    const newUser = new User({
      username: username,
      password: password
    });

    newUser.save(function (err) {
      if (err) throw err
    })
    
//     req.flash('success_msg', 'You are registered and can now login');

    res.redirect('/test-login.html');
  }
};

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      console.log("getting username");
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      user.comparePassword(password, user.password, function (err, isMatch) {
        console.log("getting passeword");
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  }));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

exports.authenticateUser = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/error.html', failureFlash: true })
  
exports.login = function (req, res) {
    // res.redirect('/');
};

exports.logout = function (req, res) {
  req.logout();

  // req.flash('success_msg', 'You are logged out');

  res.redirect('/splash');
};