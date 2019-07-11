const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  firstname: String,
  lastname: String,
  avatar: String,
})

module.exports = mongoose.model('Student', StudentSchema);