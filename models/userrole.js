const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserroleSchema = new Schema({
  role: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
})

module.exports = mongoose.model('UserRole', UserroleSchema)