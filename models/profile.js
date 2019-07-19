const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId
  },
  role: String,
  title: String,
  identityid: String,
  avatar: String,
  fullname: String,
  institution: [{
    name: String
  }],
  faculty: String,
  department: String,
  level: String,
  phone: {
    type: String,
    // required: [true, "phone number cannot be empty"]
  },

}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema);