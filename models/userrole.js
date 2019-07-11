const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserroleSchema = new Schema({
  role: String
})

module.exports = mongoose.model('UserRole', UserroleSchema)