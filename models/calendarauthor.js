const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarauthorSchema = new Schema({
  calendarid: {
    type: Schema.Types.ObjectId,
    ref: 'Calendar'
  },
  userid: {
    type: String,
  },
  avatar: {
    type: String
  },
  email: {
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
  // this indicates if the mode of addition is email or phone
  // still email for present and move to phone number for 
  // future purposes and preference
  type: {
    type: String
  },
  // this indicates if the authors already has an account
  // true for yes and false for sending a notification to create a
  // new account
  isexist: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('CalendarAuthor', CalendarauthorSchema)