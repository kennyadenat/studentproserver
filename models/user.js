const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uniqueValidator = require('mongoose-unique-validator');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;
const Config = require('../config/key');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "email cannot be empty"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  fullname: {
    type: String,
    required: [true, "fullname cannot be empty"]
  },
  matricno: String,
  provider: String,
  googleId: String,
  facebookId: String,
  avatar: String,
  token: String,
  hash: String,
  salt: String,
  role: String,
  isVerified: {
    type: Boolean,
    default: false
  },
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

UserSchema.plugin(mongoosePaginate);

UserSchema.plugin(uniqueValidator, {
  message: "is already taken"
})


UserSchema.methods.setPassword = function (password) {
  this.salt = bcrypt.genSaltSync(10);
  // Generate token from randomied key
  this.token = bcrypt.hashSync(password, this.salt);
  this.hash = bcrypt.hashSync(password, this.salt);
};

UserSchema.methods.validPassword = function (oldPass, newPass) {
  const hash = crypto
    .pbkdf2Sync(oldPass, newPass, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
      id: this._id,
      email: this.email,
      exp: parseInt(exp.getTime() / 1000)
    },
    Config.secret);
};

UserSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    email: this.email,
    fullname: this.fullname,
    avatar: this.avatar,
    token: "Bearer " + this.generateJWT(),
    role: this.role
  };
};

UserSchema.virtual('password').set(function (password) {
  this.salt = password;
  this.setPassword(password);
}).get(() => {
  return this._password;
});

// UserSchema.virtual('fullname').get(function () {
//   const fullnames = this.firstname + " " + this.lastname;
//   return fullnames;
// })

UserSchema.statics.authentication = async (users, cb) => {
  cb(users.toAuthJSON());
};

const User = module.exports = mongoose.model('Users', UserSchema);

module.exports.signUser = (newUser, password, cb) => {
  bcrypt.compare(password, newUser.hash, (err, res) => {
    cb(null, res);
  });
};