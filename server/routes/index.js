const user = require('./user');

const { register, authenticateUser, login, logout} = auth;

module.exports = function (app) {
  app.post('/register', register);
  app.post('/login', authenticateUser, login);
  app.get('/logout', logout);
};
