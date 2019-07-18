const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This could be Lectures, examination, test, practicals
const AcademicsessionSchema = new Schema({
  session: String
}, {
  timestamps: true
})

module.exports = mongoose.model('AcademicSession', AcademicsessionSchema);