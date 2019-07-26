const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This could be Lectures, examination, test, practicals
const CalendartypeSchema = new Schema({
  type: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  icon: {
    type: String,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('CalendarType', CalendartypeSchema);