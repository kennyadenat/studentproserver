const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendareventSchema = new Schema({
  calendarid: {
    type: Schema.Types.ObjectId,
    ref: 'Calendar'
  },
  //This could be a course or subject or event
  event: String,
  note: String,
}, {
  timestamps: true
})


module.exports = mongoose.model('CalendarEvent', CalendareventSchema);