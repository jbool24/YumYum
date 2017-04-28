const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

// User Schema
var UserSchema = new Schema({
  local: {
    username: {type: String, index: true},
    password: {type: String},
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  isCook: {
    type: Boolean,
    default: false,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  var user = this.local;
  console.log(user);
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('local.password')) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    console.log('salting');
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

UserSchema.statics.getUserByUsername = function (username, callback) {
  this.findOne({ "local.username": username }, callback);
}

UserSchema.statics.getUserByGoogle = function (profileId, callback) {
  this.findOne({ 'google.id': profileId }, callback);
}

UserSchema.statics.getUserById = function (id, callback) {
  User.findById(id, callback);
}

UserSchema.methods.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}

const User = mongoose.model("User", UserSchema); 

module.exports = User