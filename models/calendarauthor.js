const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarauthorSchema = new Schema({
  calendarid: {
    type: Schema.Types.ObjectId,
    ref: 'Calendar'
  },
  userid: {
    type: Schema.Types.ObjectId,
  },
  avatar: {
    type: String
  },
  // fullname for if_exist and Unknown for not found
  fullname: {
    type: String
  },
  // ownner or author for the creator and co_author for added
  role: {
    type: String
  },
  type: {
    type: String
  },
  isexist: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('CalendarAuthor', CalendarauthorSchema)