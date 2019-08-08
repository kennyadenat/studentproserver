const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rule = require('./rrule');
const Calendareventrole = require('./calendareventrole');


const CalendareventSchema = new Schema({
  calendarid: {
    type: Schema.Types.ObjectId,
    ref: 'Calendar'
  },
  userid: {
    type: String
  },
  //configure events parameters
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  allDay: {
    type: Boolean,
    default: false
  },
  starttime: {
    type: Date
  },
  endtime: {
    type: Date
  },
  duration: {
    type: Date
  },
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  textColor: {
    type: String,
    default: '#000'
  },
  editable: {
    type: Boolean,
    default: false
  },
  rrule: Rule.schema,
  //this could be a course or subject or event
  event: {
    type: String,
    lowercase: true,
    trim: true
  },
  //this indicates the auditorium, hall or venue
  location: {
    type: String,
    lowercase: true,
    trim: true
  },
  note: {
    type: String,
    lowercase: true,
    trim: true
  },
  Calendareventrole: [Calendareventrole.schema],
  note: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('CalendarEvent', CalendareventSchema);