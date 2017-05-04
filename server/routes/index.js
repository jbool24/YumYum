const user = require('./user');

const { 
  register,
  login,
  logout,
  authLocal,
  authGoogle,
  authGoogleCallback,
  continueGoogle
} = user;

const stripeCharge = require('./stripe')

module.exports = function (app) {
  app.post('/register', register);
  app.post('/login', authLocal);
  app.get('/users/logout', logout);
  app.get('/auth/google', authGoogle);
    
  app.get('/auth/google/callback', authGoogleCallback, continueGoogle)
  app.post('/users/stripe-charge', stripeCharge)
};
