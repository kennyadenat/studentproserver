const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this lists the various schools that exists
const InstitutionSchema = new Schema({
  id: String,
  name: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Institution', InstitutionSchema)