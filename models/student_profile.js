const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentprofileSchema = new Schema({
  firstname: String,
  lastname: String,
  matricno: String,
  gender: String,
  faculty: String,
  department: String,
  level: String

}, {
  timestamps: true
})

module.exports = mongoose.model('StudentProfile', StudentprofileSchema);