const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscribedcalendarSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId
  },
  calendarid: {
    type: Schema.Types.ObjectId
  },
  title: String,
  status: {
    type: Boolean,
    default: false
  },
  subscribedevent: [{
    type: Schema.Types.ObjectId,
    ref: "SubscribedEvent"
  }],
}, {
  timestamps: true
})

module.exports = mongoose.model('SubscribedCalendar', SubscribedcalendarSchema);