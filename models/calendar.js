const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
  id: String,
  title: String,
  institution: String,
  // This describes the type of calendar
  type: String,
  color: String,
  note: String,
  status: String,
  startdate: Date,
  enddate: Date,
  calendarevent: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarEvent"
  }],
})

module.exports = mongoose.model('Calendar', CalendarSchema);