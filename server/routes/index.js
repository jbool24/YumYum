const user = require('./user');
const main = require('./main');
const auth = require('./auth');

const { indexPage, splash } = main;
const { register, authenticateUser, login, logout} = user;
const { authenticated } = auth;

module.exports = function (app) {
  app.get("/", authenticated, indexPage);
  app.get("/splash/", splash);
  app.post('/register', register);
  app.post('/login', authenticateUser, login);
  app.get('/logout', logout);
};
