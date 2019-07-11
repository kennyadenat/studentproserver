const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This could be Lectures, examination, test, practicals
const CalendartypeSchema = new Schema({
  type: String,
  icon: String,
  description: String
}, {
  timestamps: true
})

module.exports = mongoose.model('CalendarType', CalendartypeSchema);