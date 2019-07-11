const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "email cannot be empty"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  firstname: {
    type: String,
    required: [true, "firstname cannot be empty"]
  },
  lastname: {
    type: String,
    required: [true, "lastname cannot be empty"]
  },
  phone: {
    type: String,
    required: [true, "phone number cannot be empty"]
  },
  provider: String,
  googleId: String,
  facebookId: String,
  avatar: String,
  token: String,
  hash: String,
  salt: String,
  role: String,
  createdon: {
    type: Date,
    default: Date.now
  },
  lastlogin: {
    type: Date
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema);