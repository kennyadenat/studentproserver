const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// these are the events for the subscribed calendar. when a user
// adds an event, it also includes its metadata.
const SubscribedeventSchema = new Schema({
  title: String,
  userid: {
    type: Schema.Types.ObjectId
  },
  calendarid: {
    type: Schema.Types.ObjectId
  },
  calendareventid: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('SubscribedEvent', SubscribedeventSchema);