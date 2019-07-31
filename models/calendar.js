const mongoose = require('mongoose');
const timeZone = require('mongoose-timezone');
const Schema = mongoose.Schema;
const mongoosepaginator = require('mongoose-paginate-v2');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const CalendarAuthor = require('./calendarauthor');
const CalendarEvent = require('./calendarevent');

const CalendarSchema = new Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true
  },
  institution: String,
  // This describes the type of calendar
  type: String,
  // indicates color type for the calendar
  icon: String,
  note: {
    type: String,
    lowercase: true,
    trim: true
  },
  code: {
    type: String,
    lowercase: true,
    trim: true
  },
  // details about the url link. both public and private
  public: {
    type: String,
    lowercase: true,
    trim: true
  },
  private: {
    type: String,
    lowercase: true,
    trim: true
  },
  // indicates if its public or private
  status: Boolean,
  timezone: {
    type: String
  },
  calendarevent: [{
    type: Schema.Types.ObjectId,
    ref: "CalendarEvent"
  }],
  calendarauthor: [CalendarAuthor.schema]
  // calendarauthor: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "CalendarAuthor"
  // }]
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

// CalendarSchema.plugin(timeZone, {
//   paths: ['timezone']
// });
CalendarSchema.plugin(mongoosepaginator);
module.exports = mongoose.model('Calendar', CalendarSchema);