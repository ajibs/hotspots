const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please supply a username'
  },
  password: {
    type: String,
    required: 'Please supply a password'
  }
});

/**
 * methods
 */

// generate a hash
userSchema.methods.generateHash = function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
}

userSchema.methods.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
