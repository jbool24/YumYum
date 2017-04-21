const auth = require('./auth');

const { register } = auth;

module.exports = function (app) {
  app.post('/register', auth.register);
};
