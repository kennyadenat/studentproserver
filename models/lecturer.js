const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LecturerSchema = new Schema({
  firstname: String,
  lastname: String,
  avatar: String,
  // This  shows the teacher's role. 
  //Either a lecturer, Invigilator or Assisting lecturer
  role: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Lecturer', LecturerSchema);