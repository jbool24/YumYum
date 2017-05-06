const user = require('./user');

const { 
  register,
  login,
  logout,
  authLocal,
  authGoogle,
  authGoogleCallback,
  continueGoogle,
  checkRegister
} = user;

const stripeCharge = require('./stripe')

module.exports = function (app) {
  app.post('/user/authentication', checkRegister, authLocal);
  app.get('/user/logout', logout);
  app.get('/auth/google', authGoogle);
    
  app.get('/auth/google/callback', authGoogleCallback, continueGoogle)
  app.post('/users/stripe-charge', stripeCharge)
};
