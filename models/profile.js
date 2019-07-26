const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const ProfileSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId
  },
  email: String,
  role: String,
  title: String,
  identityid: String,
  avatar: String,
  fullname: String,
  institution: String,
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

ProfileSchema.plugin(mongoose_fuzzy_searching, {
  fields: [{
    name: 'email',
    minSize: 3,
    prefixOnly: true,
  }, {
    name: 'fullname',
    minSize: 3,
    prefixOnly: true,
  }, {
    name: 'identityid',
    minSize: 3,
    prefixOnly: true,
  }]
});

module.exports = mongoose.model('Profile', ProfileSchema);