const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

// User Schema
var UserSchema = new Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  }
  // email: {
  //   type: String
  // },
  // name: {
  //   type: String
  // }
});

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      console.log(user.password);
      next();
    });
  });
});

// module.exports.createUser = function (newUser, callback) {
//   console.log(newUser);
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash(newUser.password, salt, function (err, hash) {
//       newUser.password = hash;
//       newUser.save(callback);
//     });
//   });
// }

// exports.User =  mongoose.model('User', UserSchema);
// const getUserByUsername = function (username, callback) {
//   var query = { username: username };
//   User.findOne(query, callback);
// }

UserSchema.statics.getUserByUsername = function (username, callback) {
  var query = { username: username };
  this.findOne(query, callback);
}


UserSchema.statics.getUserById = function (id, callback) {
  User.findById(id, callback);
}

// exports.comparePassword = function (candidatePassword, hash, callback) {
//   bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
//     if (err) throw err;
//     callback(null, isMatch);
//   });
// }

UserSchema.methods.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}

const User = mongoose.model("User", UserSchema); 

module.exports = User