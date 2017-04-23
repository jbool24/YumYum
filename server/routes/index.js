const user = require('./user');
const main = require('./main');

const {index, splah} = main;
const { register, authenticateUser, login, logout} = user;

module.exports = function (app) {
  // app.get("/", index);
  // app.get("/splash/", splash);
  app.post('/register', register);
  app.post('/login', authenticateUser, login);
  app.get('/logout', logout);
};
