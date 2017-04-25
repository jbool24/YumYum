const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../../models/user');
const configAuth = require('./config');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username, password);
    User.getUserByUsername(username, function (err, user) {
      console.log("getting username");
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: 'Unknown User' });
      }
      user.comparePassword(password, user.local.password, function (err, isMatch) {
        console.log("getting password");
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      });
    });
  })
);

// passport.use(new FacebookStrategy({
//   clientID: configAuth.facebookAuth.clientID,
//   clientSecret: configAuth.facebookAuth.clientSecret,
//   callbackURL: configAuth.facebookAuth.callbackURL
// },
//   function (accessToken, refreshToken, profile, done) {
//     process.nextTick(function () {
//       User.findOne({ 'facebook.id': profile.id }, function (err, user) {
//         if (err)
//           return done(err);
//         if (user)
//           return done(null, user);
//         else {
//           var newUser = new User();
//           newUser.facebook.id = profile.id;
//           newUser.facebook.token = accessToken;
//           newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
//           newUser.facebook.email = profile.emails[0].value;

//           newUser.save(function (err) {
//             if (err)
//               throw err;
//             return done(null, newUser);
//           })
//           console.log(profile);
//         }
//       });
//     });
//   }

// ));

passport.use(new GoogleStrategy({
  clientID: configAuth.googleAuth.clientID,
  clientSecret: configAuth.googleAuth.clientSecret,
  callbackURL: configAuth.googleAuth.callbackURL
},
  function (accessToken, refreshToken, profile, done) {

    User.getUserByGoogle(profile.id, function (err, user) {
      if (err)
        return done(err);
      if (user)
        return done(null, user);
      else {
        var newUser = new User();
        newUser.google.id = profile.id;
        newUser.google.token = accessToken;
        newUser.google.name = profile.displayName;
        newUser.google.email = profile.emails[0].value;

        newUser.save(function (err) {
          if (err)
            throw err;
          return done(null, newUser);
        })
        console.log(profile);
      }
    });
  }

));

module.exports = passport;
