const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const CalendarSchema = new Schema({
  title: String,
  institution: String,
  // This describes the type of calendar
  type: String,
  // indicates color type for the calendar
  icon: String,
  note: String,
  // indicates if its public or private
  status: Boolean,
  timezone: {
    type: Date
  },
  calendarevent: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarEvent"
  }],
  calendarauthor: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarAuthor"
  }],
})

CalendarSchema.plugin(mongoose_fuzzy_searching, {
  fields: [{
    name: 'title',
    minSize: 3,
    prefixOnly: true,
  }, {
    name: 'type',
    minSize: 3,
    prefixOnly: true,
  }]
});

CalendarSchema.plugin(timeZone, {
  paths: ['timezone']
});

module.exports = mongoose.model('Calendar', CalendarSchema);