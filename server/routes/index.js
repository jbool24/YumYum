const auth = require('./auth');

const { register, login, authenticateUser} = auth;

module.exports = function (app) {
  app.post('/register', register);
  app.post('/login', authenticateUser, login)
};
