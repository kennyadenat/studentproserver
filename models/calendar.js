const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
  title: String,
  institution: String,
  // This describes the type of calendar
  type: String,
  // indicates color type for the calendar
  color: String,
  note: String,
  // indicates if its public or private
  status: Boolean,
  // for start date and end date, any event set wont exceed the calendar. .
  startdate: Date,
  timezone: {
    type: Date
  },
  enddate: Date,
  calendarevent: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarEvent"
  }],
  calendarauthor: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarAuthor"
  }],
})

CalendarSchema.plugin(timeZone, {
  paths: ['timezone']
});

module.exports = mongoose.model('Calendar', CalendarSchema);