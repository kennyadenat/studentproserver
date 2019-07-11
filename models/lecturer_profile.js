const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LecturerprofileSchema = new Schema({
  title: String,
  firstname: String,
  lastname: String,
  faculty: String,
  gender: String,
  department: String,

}, {
  timestamps: true
})

module.exports = mongoose.model('LecturerProfile', LecturerprofileSchema);